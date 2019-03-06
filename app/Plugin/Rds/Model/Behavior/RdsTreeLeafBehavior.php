<?php
App::uses('ModelBehavior', 'Model');

/**
 * Rds Tree Leaf Behavior
 * 
 * Behavior to work with AngularJS Rds Tree directive
 * Use this behavior to make this model a branch's leaf, if you use Rds Tree Behavior on different model 
 * Add (int) order field in database table to enable sorting
 */
class RdsTreeLeafBehavior extends ModelBehavior {
	
	protected $_fixOrder = true;
	
	public function fixOrder(Model $model, $value = null) {
		
		if ($value === null) return $this->_fixOrder;
		else $this->_fixOrder = $value;
		
	}
	
	public function beforeSave(Model $model, $options = array()) {
		
		if ($this->_fixOrder && $model->hasField('order') && !isset($model->data[$model->name]['order'])) {
			foreach ($model->belongsTo as $belongsToModel => $value) {
				if (array_search('Rds.RdsTree', $model->$belongsToModel->actsAs) !== false) {
					$treeModel = $belongsToModel;
					break;
				}
			}
			
			if (isset($treeModel)) {
				$foreignKey = $model->belongsTo[$treeModel]['foreignKey'];
				$lastModel = $model->find('first', array(
					'conditions' => array(
						$model->name.'.'.$foreignKey => $model->data[$model->name][$foreignKey]
					),
					'order' => $model->name.'.order DESC'
				));
				if ($lastModel) $model->data[$model->name]['order'] = $lastModel[$model->name]['order'] + 1;
			}
		}
		
		return true;
		
	}
	
}
