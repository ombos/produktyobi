<?php
App::uses('Component', 'Controller');
App::uses('Order', 'Model');

class FilterComponent extends Component {
    
    protected $_specialKeys = array('limit', 'order', 'author_list');
    protected $_specialConditionValues = array('deadline_close');
    
	public function initialize(Controller $controller) {
        
	}
    
    public function buildAll($data) {
        
        $conditions = array();
        $limit = null;
        $order = null;
        
        if ($specialCondition = $this->hasSpecialCondition($data)) {
            if ($specialCondition == 'Order.deadline_close') {
                $data['order'] = 'Order.deadline ASC';
                $data['Order.deadline <='] = date('Y-m-d', strtotime(Order::$deadlineCloseTimeString));
            }
        }
        
        $conditions = $this->buildConditions($data);
        $limit = $this->buildLimit($data);
        $order = $this->buildOrder($data);
        
        return array(
            'conditions' => $conditions,
            'limit' => $limit,
            'order' => $order
        );
        
    }
    
    public function hasSpecialCondition($data) {
        
        foreach ($data as $filterKey => $filterValue) {
            foreach ($this->_specialConditionValues as $specialConditionValue) {
                if (preg_match('/'.$specialConditionValue.'/', $filterValue)) {
                    return $filterValue;
                }
            }
        }
        
        return false;
        
    }
    
    public function buildConditions($data) {
        
        $conditions = array();
        foreach ($data as $filterKey => $filterValue) {
            if (!in_array($filterKey, $this->_specialKeys)) {
                if (preg_match('/created|modified|deadline/', $filterKey)) {
                    $filterKey = str_replace('_from', ' >=', $filterKey);
                    $filterKey = str_replace('_to', ' <=', $filterKey);
                    $conditions[$filterKey] = $filterValue;
                    continue;
                }
                if (preg_match('/_intval/', $filterKey)) {
                    $filterKey = str_replace('_intval', '', $filterKey);
                    $conditions[$filterKey] = $filterValue;
                    continue;
                }
                $conditions[$filterKey.' LIKE'] = '%'.$filterValue.'%';
            }
        }
        
        return $conditions;
        
    }
    
    public function buildLimit($data) {
        
        $limit = null;
        foreach ($data as $filterKey => $filterValue) {
            if ($filterKey == 'limit') {
                $limit = $filterValue;
                break;
            }
        }
        
        return $limit;
        
    }
    
    public function buildOrder($data) {
        
        $order = null;
        foreach ($data as $filterKey => $filterValue) {
            if ($filterKey == 'order') {
                $filterValue = str_replace('_desc', ' DESC', $filterValue);
                $filterValue = str_replace('_asc', ' ASC', $filterValue);
                $order = $filterValue;
                break;
            }
        }
        
        return $order;
        
    }
	
}
    