<?php
App::uses('TreeBehavior', 'Model/Behavior');

/**
 * Rds Tree Behavior
 * 
 * Extends CakePHP Tree Behavior to work with AngularJS Rds Tree directive
 * Model using this behavior is named branch
 * Add (int) order field in database table to enable sorting
 * Use Rds Tree Leaf Behavior in different model to act as branch's leaf
 */
class RdsTreeBehavior extends TreeBehavior {
    
    protected $_fixOrder = true;
    
    public function fixOrder(Model $model, $value = null) {
        
        if ($value === null) return $this->_fixOrder;
        else $this->_fixOrder = $value;
        
    }
    
    /**
     * Get all data related to this model, structured to work with AngularJS Rds Tree directive
     * 
     * Options:
     * - 'leaf' Array or Name of the model using Rds Tree Leaf Behavior, related to this model
     *   - 'model' Name of the model using Rds Tree Leaf Behavior, related to this model
     *   - 'order' CakePHP style order
     * - 'fields' Array of fields to return. Each field must be prefixed with model name. It can be any model related to this model or the leaf model. Any tree related fields are added to the list automatically
     * - 'rootId' Id of root. NEVER USE FOR SAVING !!!
     * 
     * @param Model $Model using this behavior of model
     * @param array $options array of options
     * @return array [
     *           root => array of tree structure,
     *           branches => array of unasigned branches,
     *           leaves => array of unasigned leaves
     *         ]
     */
    public function findTree(Model $model, $options = array()) {
        
        $tree = array();
        
        $leafModel = null;
        if (isset($options['leaf'])) {
            
            if (is_array($options['leaf'])) {
                $leafModel = $options['leaf']['model'];
                $leafOrder = $options['leaf']['order'];
                unset($options['leaf']);
            } else {
                $leafModel = $options['leaf'];
                unset($options['leaf']);
            }
            
            if (isset($leafOrder)) {
                $model->hasMany[$leafModel]['order'] = $leafOrder;
                $model->$leafModel->order = $leafOrder;
            } elseif ($model->$leafModel->hasField('order')) {
                $model->hasMany[$leafModel]['order'] = 'order ASC';
                $model->$leafModel->order = $leafModel.'.order ASC';
            }
        }
        
        $associatedFields = null;
        if (isset($options['fields'])) {
            if (array_search($model->name.'.id', $options['fields']) === false) array_push($options['fields'], $model->name.'.id');
            if (array_search($model->name.'.parent_id', $options['fields']) === false) array_push($options['fields'], $model->name.'.parent_id');
            if ($model->hasField('order') && array_search($model->name.'.order', $options['fields']) === false) array_push($options['fields'], $model->name.'.order');
            
            if (isset($leafModel)) {
                if (array_search($leafModel.'.id', $options['fields']) === false) array_push($options['fields'], $leafModel.'.id');
                
                $leafParentField = $model->hasMany[$leafModel]['foreignKey'];
                if (array_search($leafModel.'.'.$leafParentField, $options['fields']) === false) array_push($options['fields'], $leafModel.'.'.$leafParentField);
                
                if ($model->$leafModel->hasField('order') && array_search($leafModel.'.order', $options['fields']) === false) array_push($options['fields'], $leafModel.'.order');
            }
            
            $associatedFields = array();
            foreach ($options['fields'] as $key => $field) {
                if (strpos($field, '.') !== false) {
                    $parts = explode('.', $field);
                    $modelName = $parts[0];
                    $field = $parts[1];
                    $associatedFields[$modelName][] = $field;
                    if ($modelName != $model->name && !isset($model->belongsTo[$modelName]) && !isset($model->hasOne[$modelName])) unset($options['fields'][$key]);
                }
            }
        }
        
        if ($model->hasField('order')) $model->order = 'order ASC';
        
        $results = $model->find('threaded', $options);
        $results = $this->_getRoot($model, $results, isset($options['rootId']) ? $options['rootId'] : 1);
        if (!$results) $results = array();
        $this->_fixBranch($model, $results, $leafModel, $associatedFields);
        $tree['root'] = $results;
        
        // get unasigned branches
        
        $options['conditions'] = array(
            $model->name.'.id !=' => 1,
            $model->name.'.parent_id' => 0
        );
        $branches = $model->find('all', $options);
        foreach ($branches as &$branch) {
            $this->_fixBranch($model, $branch, $leafModel, $associatedFields);
            $branch['children'] = array();
        }
        $tree['branches'] = $branches;
        
        // get unasigned leaves
        
        if ($leafModel) {
            $leaves = $model->$leafModel->find('all', array(
                'conditions' => array(
                    $model->hasMany[$leafModel]['foreignKey'] => 0
                )
            ));
            $this->_fixLeaves($model->$leafModel, $leaves, $associatedFields);
            $leaves = array(
                $leafModel => $leaves
            );
            $tree['leaves'] = $leaves;
        }
        
        return $tree;
        
    }
    
    /**
     * Save data related to this model, structured to work with AngularJS Rds Tree directive
     * 
     * Options:
     * - 'leaf' Name of the model using Rds Tree Leaf Behavior related to this model
     * 
     * @param Model $Model using this behavior of model
     * @param array $data array of tree data returned from findTree
     * @param array $options array of options
     * @return array of validation errors or null on success
     */
    public function saveTree(Model $model, $data, $options = array()) {
        
        $leafModel = isset($options['leaf']) ? $options['leaf'] : null;
        $errors = $this->_validateBranch($model, $data['root'], $leafModel);
        if (!$errors && isset($data['branches'])) {
            foreach ($data['branches'] as $branch) {
                $errors = $this->_validateBranch($model, $branch, $leafModel);
                if ($errors) break;
            }
        }
        if (!$errors && $leafModel) $errors = $this->_validateLeaves($model->$leafModel, $data['leaves']);
        if (!$errors) {
            $this->_saveBranch($model, $data['root'], $leafModel);
            if (isset($data['branches'])) {
                foreach ($data['branches'] as $branch) {
                    $this->_saveBranch($model, $branch, $leafModel);
                }
            }
            if ($leafModel) $this->_saveLeaves($model->$leafModel, $data['leaves']);
        }
        return $errors;
        
    }
    
    public function insertTree(Model $model, $data) {
        
        $list = array();
        $lastBranch = $model->find('first', array(
            'fields' => array(
                $model->name.'.id'
            ),
            'order' => $model->name.'.id DESC'
        ));
        if ($lastBranch) {
            $this->_fixForInsertTree($model, $list, $data, $lastBranch[$model->name]['id'] + 1, 0);
        } else {
            $this->_fixForInsertTree($model, $list, $data, 1, 0);
        }
        
        $error = false;
        foreach ($list as $branch) {
            if (!$model->save($branch)) {
                $error = true;
                break;
            }
        }
        
        return $error ? false : $list[0]['id'];
        
    }
    
    public function beforeSave(Model $model, $options = array()) {
        
        if ($this->_fixOrder && $model->hasField('order') && !isset($model->data[$model->name]['order']) && isset($model->data[$model->name]['parent_id'])) {
            $lastModel = $model->find('first', array(
                'conditions' => array(
                    $model->name.'.parent_id' => $model->data[$model->name]['parent_id']
                ),
                'order' => $model->name.'.order DESC'
            ));
            if ($lastModel) $model->data[$model->name]['order'] = $lastModel[$model->name]['order'] + 1;
        }
        
        return parent::beforeSave($model, $options);
        
    }
    
    public function beforeDelete(Model $model, $cascade = true) {
        
        // $this->_detachBranchChildren($model, $model->id);
        return parent::beforeDelete($model, $cascade);
        
    }
    
    private function _getRoot($model, $results, $rootId = 1) {
        
        foreach ($results as $result) {
            if ($result[$model->name]['id'] == $rootId) return $result;
            else {
                $root = $this->_getRoot($model, $result['children'], $rootId);
                if ($root) return $root;
            }
        }
        return null;
        
    }
    
    /**
     * For fixing root data
     */
    private function _fixBranch($model, &$branch, $leafModel, $associatedFields) {
        
        foreach ($branch as $modelName => &$item) {
            if ($modelName == $model->name) continue;
            elseif ($modelName == 'children') foreach ($item as &$subbranch) $this->_fixBranch($model, $subbranch, $leafModel, $associatedFields);
            else {
                if (isset($associatedFields)) {
                    if (isset($associatedFields[$modelName])) $this->_fixItem($model->$modelName, $item, $associatedFields);
                    else unset($branch[$modelName]);
                }
                if (isset($branch[$modelName]) && $modelName != $leafModel) {
                    $branch[$model->name][$modelName] = $item;
                    unset($branch[$modelName]);
                }
            }
        }
        
    }
    
    private function _fixItem($model, &$item, $associatedFields) {
        
        if (isset($item[0])) foreach ($item as &$subitem) $this->_fixItem($model, $subitem, $associatedFields);
        else {
            $associated = $model->getAssociated();
            foreach ($item as $field => &$value) {
                if (array_key_exists($field, $associated)) {
                    if (isset($associatedFields[$field])) $this->_fixItem($model->$field, $value, $associatedFields);
                    else unset($item[$field]);
                } elseif (array_search($field, $associatedFields[$model->name]) === false) unset($item[$field]);
            }
        }
        
    }
    
    /**
     * For fixing leaves data
     */
    private function _fixLeaves($model, &$leaves, $associatedFields) {
        
        foreach ($leaves as &$leaf) {
            if ($associatedFields) {
                foreach ($leaf as $modelName => &$item) {
                    if (isset($associatedFields[$modelName])) {
                        foreach ($item as $field => $value) {
                            if (array_search($field, $associatedFields[$modelName]) === false) unset($item[$field]);
                        }
                    } else unset($leaf[$modelName]);
                }
            }
            foreach ($leaf[$model->name] as $field => $value) {
                $leaf[$field] = $value;
            }
            unset($leaf[$model->name]);
        }
        
    }
    
    private function _fixForInsertTree($model, &$list, &$branch, $id, $parentId) {
        
        unset($branch[$model->name]['lft'], $branch[$model->name]['rght']);
        $branch[$model->name]['id'] = $id;
        $branch[$model->name]['parent_id'] = $parentId;
        $list[] = $branch[$model->name];
        $parentId = $id;
        
        if (isset($branch['children'])) {
            foreach ($branch['children'] as &$subbranch) {
                $id = $this->_fixForInsertTree($model, $list, $subbranch, $id + 1, $parentId);
            }
        }
        
        return $id;
        
    }
    
    private function _validateBranch($model, $branch, $leafModel) {
        
        foreach ($branch as $modelName => $item) {
            if ($modelName == $model->name) {
                $model->set($item);
                if (!$model->validates()) return $model->validationErrors;
            } elseif ($modelName == 'children') foreach ($item as $subbranch) {
                $errors = $this->_validateBranch($model, $subbranch, $leafModel);
                if ($errors) return $errors;
            } elseif ($modelName == $leafModel) foreach ($item as $leaf) {
                $model->$modelName->set($leaf);
                if (!$model->$modelName->validates()) return $model->$modelName->validationErrors;
            }
        }
        
    }
    
    private function _validateLeaves($model, $leaves) {
        
        if (isset($leaves[$model->name])) foreach ($leaves[$model->name] as $leaf) {
            $model->set($leaf);
            if (!$model->validates()) return $model->validationErrors;
        }
        
    }
    
    private function _saveBranch($model, $branch, $leafModel) {
        
        foreach ($branch as $modelName => $item) {
            if ($modelName == $model->name) $model->save($item);
            elseif ($modelName == 'children') foreach ($item as $subbranch) $this->_saveBranch($model, $subbranch, $leafModel);
            elseif ($modelName == $leafModel) foreach ($item as $leaf) $model->$modelName->save($leaf);
        }
        
    }
    
    private function _saveLeaves($model, $leaves) {
        
        if (isset($leaves[$model->name])) foreach ($leaves[$model->name] as $leaf) $model->save($leaf);
        
    }
    
    private function _detachBranchChildren($model, $id) {
        
        $fixOrder = $this->_fixOrder;
        $this->_fixOrder = true;
        
        $model->recursive = -1;
        $branches = $model->find('all', array(
            'fields' => array(
                $model->name.'.id'
            ),
            'conditions' => array(
                $model->name.'.parent_id' => $id
            )
        ));
        
        foreach ($branches as $branch) {
            $branch[$model->name]['parent_id'] = 0;
            $model->save($branch);
            $this->_detachBranchChildren($model, $branch[$model->name]['id']);
        }
        
        foreach ($model->hasMany as $leafModel => $associationOptions) {
            if (array_search('Rds.RdsTreeLeaf', $model->$leafModel->actsAs) !== false) {
                $leafFixOrder = $model->$leafModel->fixOrder();
                $model->$leafModel->fixOrder(true);
                
                $model->$leafModel->recursive = -1;
                $leaves = $model->$leafModel->find('all', array(
                    'fields' => array(
                        $leafModel.'.id'
                    ),
                    'conditions' => array(
                        $leafModel.'.'.$associationOptions['foreignKey'] => $id
                    )
                ));
                
                foreach ($leaves as $leaf) {
                    $leaf[$leafModel][$associationOptions['foreignKey']] = 0;
                    $model->$leafModel->save($leaf);
                }
                
                $model->$leafModel->fixOrder($leafFixOrder);
                break;
            }
        }
        
        $this->_fixOrder = $fixOrder;
        
    }
    
}
