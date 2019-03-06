<?php
App::uses('AppController', 'Controller');

class RaportsController extends AppController {

	public $helpers = array();
    public $uses = array(
		'ObiProduct',
		'ObiCategory',
		'ObiCategoryData',
		'ObiProductCategory',
		'ObiProductData',
		'ObiProductDataBasics',
		'ObiProductDataLogistics',
		'ObiProductDataKarton',
		'ObiProductDataPalet',
		'ObiProductMedia',
		'ObiProductDataSearchResult',
		'ObiMark',
		'ObiProducer',
		'UserRoleAssociation',
		'ConnOrder',
		'UserActivity'
    );
	public $components = array(
		'ProductCart',
	);

	public function beforeFilter() {

		parent::beforeFilter();
		$this->Security->addUnlockedActions(
			'filter_unsigned',
			'filter_logistic',
			'filter_activity',
			'export_unsigned',
			'export_without_logistics',
			'export_without_media'
		);

		$this->_filesPath = 'files/import_products/';
		$this->RdsUpload->setUploadPath($this->_filesPath);
		$this->RdsImage->setImagePath($this->_filesPath);

		if (!file_exists($this->_filesPath)) {
			mkdir($this->_filesPath, 0777);
		}

	}

	public function index() {

	}

	public function unsigned() {

	}

	public function logistic() {

		$utemp = $this->UserRoleAssociation->find('all', array(
			'recursive' => 0,
			'conditions' => array(
				'UserRoleAssociation.user_role_id' => 9
			)
		));

		foreach ($utemp as $key => $value) {
			$users[$value['User']['id']] = '('.$value['User']['obi_dostawca_id'].') '.$value['User']['name'].' - '.$value['User']['email'];
		}

		$this->set(compact('users'));

	}

	public function supplier() {

		$utemp = $this->UserRoleAssociation->find('all', array(
			'recursive' => 0,
			'conditions' => array(
				'UserRoleAssociation.user_role_id' => 9
			)
		));

		foreach ($utemp as $key => $value) {
			$users[$value['User']['id']] = '('.$value['User']['obi_dostawca_id'].') '.$value['User']['name'].' - '.$value['User']['email'];
		}

		$this->set(compact('users'));
	}

	public function activity() {

	}

	public function filter_supplier() {

		if ($this->request->is('post')) {

			$data = $this->request->data;

			if (isset($data['ObiReport.supplier'])) {

				$supplier = $data['ObiReport.supplier'];
				$products = $this->ObiProduct->find('all', array(
					'recursive' => 0,
					'conditions' => array(
						'ObiProduct.user_id' => $supplier
					)
				));

				$this->rdsResponse->data['items'] = $products;
			} else {
				/*$supplier = null;
				$products = $this->ObiProductDataLogistics->find('all', array(
					'recursive' => 0,

				));*/
				//$products = array();
			}


		}

	}

	public function filter_unsigned() {

		$products = $this->__getUnsigned();

		if ($products) {
			$this->rdsResponse->data['items'] = $products;
		} else {
			$this->rdsResponse->data['items'] = null;
		}

	}

	public function filter_logistic() {

		if ($this->request->is('post')) {

			$data = $this->request->data;

			if (isset($data['ObiReport.reporttype']) && !empty($data['ObiReport.reporttype'])) {

				if (isset($data['ObiReport.supplier'])) {
					$supplier = $data['ObiReport.supplier'];
				} else {
					$supplier = null;
				}

				if ($data['ObiReport.reporttype'] == 1) {

					$products = $this->ObiProduct->find('all', array(
						'recursive' => -1,
						'fields' => array(
							'ObiProduct.id'
						),
						'conditions' => array(
							'ObiProduct.user_id' => $supplier
						)
					));

					foreach ($products as $key => $value) {

						$logistics = $this->ObiProductDataLogistics->find('first', array(
							'recursive' => -1,
							'conditions' => array(
								'obi_product_id' => $value['ObiProduct']['id']
							)
						));

						if ($logistics['ObiProductDataLogistics']['product_width'] == 0 &&
							$logistics['ObiProductDataLogistics']['product_height'] == 0 &&
							$logistics['ObiProductDataLogistics']['product_weight'] == 0 &&
							$logistics['ObiProductDataLogistics']['product_depth'] == 0
						) {

							$element = $this->ObiProductDataSearchResult->find('first', array(
								'recursive' => -1,
								'conditions' => array(
									'obi_product_id' => $value['ObiProduct']['id']
								)
							));

							if ($element) {
								$returnProducts[] = $element;
							}
						}
					}

				} else if ($data['ObiReport.reporttype'] == 2) {

					$products = $this->ObiProduct->find('all', array(
						'recursive' => -1,
						'fields' => array(
							'ObiProduct.id'
						),
						'conditions' => array(
							'ObiProduct.user_id' => $supplier
						)
					));

					foreach ($products as $key => $value) {

						$media = $this->ObiProductMedia->find('first', array(
							'recursive' => -1,
							'conditions' => array(
								'obi_product_id' => $value['ObiProduct']['id']
							)
						));

						if (empty($media)) {

							$element = $this->ObiProductDataSearchResult->find('first', array(
								'recursive' => -1,
								'conditions' => array(
									'obi_product_id' => $value['ObiProduct']['id']
								)
							));

							if ($element) {
								$returnProducts[] = $element;
							}
						}
					}

				} else if ($data['ObiReport.reporttype'] == 3) {

				} else if ($data['ObiReport.reporttype'] == 4) {

				} else if ($data['ObiReport.reporttype'] == 5) {

				}

				if (!empty($returnProducts)) {
					$this->rdsResponse->data['items'] = $returnProducts;
				} else {
					$this->rdsResponse->data['items'] = NULL;
				}

			}

			//debug($this->request->data);

		}

	}

	public function filter_activity() {

		$activity = $this->__getUserActivity();

		if ($activity) {
			$this->rdsResponse->data['items'] = $activity;
		} else {
			$this->rdsResponse->data['items'] = null;
		}

	}

	public function export_without_logistics() {

		if ($this->request->is('post')) {

			$supplier = $this->request->data;
			$fileNameSupplier = $supplier;

			if (!isset($supplier)) {
				$supplier = null;
				$fileNameSupplier = 'wszystkie';
			}

			$products = $this->ObiProduct->find('all', array(
				'recursive' => -1,
				'fields' => array(
					'ObiProduct.id'
				),
				'conditions' => array(
					'ObiProduct.user_id' => $supplier
				)
			));

			foreach ($products as $key => $value) {

				$logistics = $this->ObiProductDataLogistics->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'obi_product_id' => $value['ObiProduct']['id']
					)
				));

				if ($logistics['ObiProductDataLogistics']['product_width'] == 0 &&
					$logistics['ObiProductDataLogistics']['product_height'] == 0 &&
					$logistics['ObiProductDataLogistics']['product_weight'] == 0 &&
					$logistics['ObiProductDataLogistics']['product_depth'] == 0
				) {

					$element = $this->ObiProductDataSearchResult->find('first', array(
						'recursive' => -1,
						'conditions' => array(
							'obi_product_id' => $value['ObiProduct']['id']
						)
					));

					if ($element) {
						$returnProducts[] = $element;
					}
				}
			}

			require_once '../Lib/PHPExcel/Classes/PHPExcel.php';

			$objPHPExcel = new PHPExcel();
			$objPHPExcel->getProperties()->setCreator("PRODUKTYOBI.PL");

			$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A1', 'Numer OBI');

			$lp = 1;

			foreach($returnProducts as $key => $value) {

				$lp++;

				$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A'.$lp, $value['ObiProductDataSearchResult']['obi_inner_id']);
			}

			$objPHPExcel->getActiveSheet()->setTitle('Produkty bez logistycznych');
			$objPHPExcel->setActiveSheetIndex(0);

			header('Content-Type: application/vnd.ms-excel');
			header('Content-Disposition: attachment;filename="01simple.xls"');
			header('Cache-Control: max-age=0');
			header('Cache-Control: max-age=1');
			header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
			header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT');
			header ('Cache-Control: cache, must-revalidate');
			header ('Pragma: public'); // HTTP/1.0
			$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');

			$pathToSave = $_SERVER['DOCUMENT_ROOT'].'/app/webroot/files/xlsx/produktyobi_bez_logistycznych_'.$fileNameSupplier.'.xls';

			$objWriter->save($pathToSave);

			$this->rdsResponse->data = '/files/xlsx/produktyobi_bez_logistycznych_'.$fileNameSupplier.'.xls';


		}

	}

	public function export_without_media() {

		if ($this->request->is('post')) {

			$supplier = $this->request->data;
			$fileNameSupplier = $supplier;

			if (!isset($supplier)) {
				$supplier = null;
				$fileNameSupplier = 'wszystkie';
			}

			$products = $this->ObiProduct->find('all', array(
				'recursive' => -1,
				'fields' => array(
					'ObiProduct.id'
				),
				'conditions' => array(
					'ObiProduct.user_id' => $supplier
				)
			));

			foreach ($products as $key => $value) {

				$media = $this->ObiProductMedia->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'obi_product_id' => $value['ObiProduct']['id']
					)
				));

				if (empty($media)) {

					$element = $this->ObiProductDataSearchResult->find('first', array(
						'recursive' => -1,
						'conditions' => array(
							'obi_product_id' => $value['ObiProduct']['id']
						)
					));

					if ($element) {
						$returnProducts[] = $element;
					}
				}
			}

			require_once '../Lib/PHPExcel/Classes/PHPExcel.php';

			$objPHPExcel = new PHPExcel();
			$objPHPExcel->getProperties()->setCreator("PRODUKTYOBI.PL");

			$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A1', 'Numer OBI');

			$lp = 1;

			foreach($returnProducts as $key => $value) {

				$lp++;

				$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A'.$lp, $value['ObiProductDataSearchResult']['obi_inner_id']);
			}

			$objPHPExcel->getActiveSheet()->setTitle('Produkty bez mediow');
			$objPHPExcel->setActiveSheetIndex(0);

			header('Content-Type: application/vnd.ms-excel');
			header('Content-Disposition: attachment;filename="01simple.xls"');
			header('Cache-Control: max-age=0');
			header('Cache-Control: max-age=1');
			header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
			header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT');
			header ('Cache-Control: cache, must-revalidate');
			header ('Pragma: public'); // HTTP/1.0
			$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');

			$pathToSave = $_SERVER['DOCUMENT_ROOT'].'/app/webroot/files/xlsx/produktyobi_bez_mediow_'.$fileNameSupplier.'.xls';

			$objWriter->save($pathToSave);

			$this->rdsResponse->data = '/files/xlsx/produktyobi_bez_mediow_'.$fileNameSupplier.'.xls';


		}

	}

	public function export_unsigned() {

		$products = $this->__getUnsigned();

		if ($products) {

			require_once '../Lib/PHPExcel/Classes/PHPExcel.php';

			$objPHPExcel = new PHPExcel();
			$objPHPExcel->getProperties()->setCreator("PRODUKTYOBI.PL");

			$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A1', 'Numer OBI');

			$lp = 1;

			foreach($products as $key => $value) {

				$lp++;

				$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A'.$lp, $value['ObiProductDataSearchResult']['obi_inner_id']);
			}

			$objPHPExcel->getActiveSheet()->setTitle('Produkty nieprzypisane');
			$objPHPExcel->setActiveSheetIndex(0);

			header('Content-Type: application/vnd.ms-excel');
			header('Content-Disposition: attachment;filename="01simple.xls"');
			header('Cache-Control: max-age=0');
			header('Cache-Control: max-age=1');
			header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
			header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT');
			header ('Cache-Control: cache, must-revalidate');
			header ('Pragma: public'); // HTTP/1.0
			$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');

			$pathToSave = $_SERVER['DOCUMENT_ROOT'].'/app/webroot/files/xlsx/produktyobi_nieprzypisane_produkty.xls';

			$objWriter->save($pathToSave);

			$this->rdsResponse->data = "/files/xlsx/produktyobi_nieprzypisane_produkty.xls";

		}

	}

	protected function __getUnsigned() {

		$products = $this->ObiProductDataSearchResult->find('all', array(
			'recursive' => -1,
			'conditions' => array(
				'user_id' => 0
			)
		));

		if ($products && !empty($products)) {
			return $products;
		} else {
			return FALSE;
		}
	}

	protected function __getUserActivity() {

		$activity = $this->UserActivity->find('all', array(
			'recursive' => 0,
			'order' => array(
				'UserActivity.created'
			)
		));

		if ($activity && !empty($activity)) {
			return $activity;
		} else {
			return FALSE;
		}

	}

}
