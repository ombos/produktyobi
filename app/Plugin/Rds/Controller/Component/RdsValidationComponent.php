<?php
App::uses('Component', 'Controller');

class RdsValidationComponent extends Component {
	
	protected $controller;
	
	public function initialize(Controller $controller) {
		
		$this->controller = $controller;
		
	}
	
	public function validate(Model $model, $data, $returnJson = false) {
		
		$result = $model->validateAssociated($data, array('deep' => true)) ? true : $model->validationErrors;
		if (is_array($result)) {
			$modelFields = array();
			foreach ($result as $field => $value) {
				if (isset($model->validate[$field])) {
					$modelFields[$field] = $value;
					unset($result[$field]);
				}
			}
			$result[$model->name] = $modelFields;
		}
		return $returnJson ? json_encode($result) : $result;
		
	}
	
}
	