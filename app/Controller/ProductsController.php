<?php
App::uses('AppController', 'Controller');

class ProductsController extends AppController {

	public $helpers = array();
    public $uses = array(
		'ObiProduct',
		'ObiCategory',
		'ObiCategoryData',
		'ObiProductCategory',
		'ObiProductData',
		'ObiProductDataBasics',
		'ObiProductDataLogistic',
		'ObiProductDataKarton',
		'ObiProductDataPalet',
		'ObiProductMedia',
		'ObiProductDataSearchResult',
		'ObiMark',
		'ObiProducer',
		'UserRoleAssociation',
		'ConnOrder'
    );
	public $components = array(
		'ProductCart',
	);

	public function beforeFilter() {

		parent::beforeFilter();
		$this->Security->addUnlockedActions(
			'filter_index',
			'filter_index_all',
			'logistic_data_index',
			'delete',
			'export_products',
			'import_products',
			'import_media',
			'external',
			'edit',
			'manage',
			'deleteMedia',
			'public_update_search_data'
		);

		$this->_filesPath = 'files/import_products/';
		$this->RdsUpload->setUploadPath($this->_filesPath);
		$this->RdsImage->setImagePath($this->_filesPath);

		if (!file_exists($this->_filesPath)) {
			mkdir($this->_filesPath, 0777);
		}

	}

	public function public_update_search_data() {

			$this->autoRender = false;

			$aboutUserId = 3089;

			$this->ObiProductDataSearchResult->deleteAll(array(
				'user_id' => $aboutUserId
			));

			$products = $this->ObiProduct->find('all', array(
				'recursive' => 2,
				/*'fields' => array(
					'ObiProduct.id', 'ObiProduct.user_id', 'ObiProduct.name'
				),*/
				'conditions' => array(
					'ObiProduct.user_id' => $aboutUserId
				),
				'group' => array(
					'ObiProduct.id'
				),
				//'limit' => 10
			));

			foreach ($products as $product) {

				$insertData = array();

				$thumbUrl = NULL;

				if (!empty($product['ObiProductMedia'])) {
					foreach ($product['ObiProductMedia'] as $media) {
						if ($media['media_type'] == 'image') {
							$thumbUrl = $media['src'];
							break;
						}
					}
				}

				$insertData = array(
					'obi_product_id' => $product['ObiProduct']['id'],
					'name' => $product['ObiProduct']['name'],
					'ean' => $product['ObiProductDataBasics']['product_ean'],
					'category_name' => $product['ObiProductCategory']['ObiCategory']['name'],
					'obi_inner_id' => $product['ObiProductDataBasics']['obi_product_inner_id'],
					'thumb_url' => $thumbUrl,
					'user_id' => $product['ObiProduct']['user_id']
				);

				$this->ObiProductDataSearchResult->create();
				$this->ObiProductDataSearchResult->save($insertData);

			}
	}

	public function index() {

	}

	public function filter_index($phrase = false) {

		$conditions = array();
		$products = array();

		if ($this->request->data) {

			$phrase = $this->request->data['ObiProductDataSearchResult.name'];

			$conditions = array(
				'OR' => array(
					array('ObiProductDataSearchResult.name LIKE ' => '%'.$phrase.'%'),
					array('ObiProductDataSearchResult.ean LIKE ' => '%'.$phrase.'%'),
					array('ObiProductDataSearchResult.category_name LIKE ' => '%'.$phrase.'%'),
					array('ObiProductDataSearchResult.obi_inner_id LIKE ' => '%'.$phrase.'%')
				)
			);
		}

		if ($conditions) {

			$products = $this->ObiProductDataSearchResult->find('all', array(
				'recursive' => -1,
				'conditions' => $conditions
			));

			if ($products) {
				$this->rdsResponse->data['items'] = $products;
			} else {
				$this->rdsResponse->data['items'] = null;
			}
		} else {
			$this->rdsResponse->data['items'] = null;
		}
	}

	public function filter_index_all($phrase = false) {

		$conditions = array();
		$products = array();

		if ($this->request->data) {

			$phrase = $this->request->data['ObiProductDataSearchResult.name'];

			$conditions = array(
				'OR' => array(
					array('ObiProductDataSearchResult.name LIKE ' => '%'.$phrase.'%'),
					array('ObiProductDataSearchResult.ean LIKE ' => '%'.$phrase.'%'),
					array('ObiProductDataSearchResult.category_name LIKE ' => '%'.$phrase.'%'),
					array('ObiProductDataSearchResult.obi_inner_id LIKE ' => '%'.$phrase.'%')
				)
			);

			if ($this->Authorize->isAllowed($this->Auth->user('id'), array(9))) {
				$conditions['ObiProductDataSearchResult.user_id'] = $this->Auth->user('id');
			}

			if ($conditions) {

				$products = $this->ObiProductDataSearchResult->find('all', array(
					'recursive' => -1,
					'conditions' => $conditions
				));

				if ($products) {
					$this->rdsResponse->data['items'] = $products;
				} else {
					$this->rdsResponse->data['items'] = null;
				}
			} else {
				$this->rdsResponse->data['items'] = null;
			}

		} else {
			if ($this->Authorize->isAllowed($this->Auth->user('id'), array(9))) {

				$products = $this->ObiProductDataSearchResult->find('all', array(
					'recursive' => -1,
					'conditions' => array(
						'ObiProductDataSearchResult.user_id' => $this->Auth->user('id')
					)
				));

				if ($products) {
					$this->rdsResponse->data['items'] = $products;
				} else {
					$this->rdsResponse->data['items'] = $products;
				}
			}
		}

	}

	public function logistic_data_index() {

		$conditions = array();
		$products = array();

		if ($this->request->data) {
			debug($this->request->data);
			exit;
			//$phrase = $this->request->data['ObiProductDataSearchResult.name'];

			$conditions = array(
				/*array('ObiProductDataSearchResult.name LIKE ' => '%'.$phrase.'%'),
				array('ObiProductDataSearchResult.ean LIKE ' => '%'.$phrase.'%'),
				array('ObiProductDataSearchResult.category_name LIKE ' => '%'.$phrase.'%'),
				array('ObiProductDataSearchResult.obi_inner_id LIKE ' => '%'.$phrase.'%')*/
			);

			if ($conditions) {

				$products = $this->ObiProductDataSearchResult->find('all', array(
					'recursive' => -1,
					'conditions' => $conditions
				));

				if ($products) {
					$this->rdsResponse->data['items'] = $products;
				} else {
					$this->rdsResponse->data['items'] = null;
				}
			} else {
				$this->rdsResponse->data['items'] = null;
			}

		}

	}

	public function p($id = false) {

		if ($id) {

			$this->__getProductData($id);

		} else {
			$this->_throw404();
		}

	}

	public function categories() {

	}

	public function generate_pdf($productID) {

		$this->autoRender = false;

		if ($productID) {

			$data = $this->__getProductDataPdf($productID);

			$this->ProductCart->add($data);

		}

	}

	public function external() {

		if ($this->request->is('post')) {

			$data = $this->request->data;
			$pricelist = array();

			foreach ($data['ExternalProduct']['pricelist'] as $key => $value) {

				if (!empty($value)) {
					$pricelist[] = $value[0];
				}
			}

			$pricelistJson = json_encode($pricelist);

			foreach ($data['ExternalProduct']['products'] as $k2 => $v2) {
				if (!empty($v2)) {
					$idTemp = explode("/", $v2[0]);

					$createData['obi_product_id'] = $idTemp[0];
					$createData['user_id'] = $idTemp[1];
					$createData['pricelist_elements'] = $pricelistJson;
					$createData['element_status'] = 'W trakcie realizacji';
					$createData['accepted'] = 0;

					$this->ConnOrder->create();
					$this->ConnOrder->save($createData);

				}
			}
			$this->Session->setFlash(__('Zamówienie zostało złożone.'), 'default', array('type' => 'success'));
			$this->rdsResponse->data = array(
				'redirect' => Router::url(array('controller' => 'products', 'action' => 'external'))
			);

		}

		$products = $this->__getUserProducts();

		$this->set(compact('products'));

	}

	public function add() {
		if ($this->request->is('post')) {
			$this->ObiProduct->useValidationSet('add');
			$result = $this->RdsValidation->validate($this->ObiProduct, $this->request->data);

			if ($result === true) {
				$data = $this->request->data;

				if ($this->ObiProduct->saveAssociated($data)) {

					$elementID = $this->ObiProduct->getInsertID();
					$jsonString = array(
						'simpleUserID' => $this->Auth->user('id'),
						'elementID' => $elementID,
						'elementModel' => 'ObiProduct'
					);
					$this->__saveGlobalNotification(3, json_encode($jsonString));

					$this->rdsResponse->data = array(
						'redirect' => Router::url(array('controller' => 'products', 'action' => 'edit', $this->ObiProduct->getLastInsertID()))
					);
				}
			} else $this->rdsResponse->errors = $result;
		}

		$categories = $this->ObiCategory->find('all', array(
			'recursive' => -1,
			'fields' => array(
				'ObiCategory.id', 'ObiCategory.name',  'ObiCategory.obi_inner_category_id', 'ObiCategory.obi_group_id'
			),
			'order' => array(
				'ObiCategory.name'
			)
		));

		$producers = $this->UserRoleAssociation->find('all', array(
			'recursive' => 1,
			'fields' => array(
				'User.id', 'User.name', 'User.obi_dostawca_id'
			),
			'conditions' => array(
				'UserRoleAssociation.user_role_id' => 9
			)
		));

		$obiProducers = $this->ObiProducer->find('list', array(
			'recursive' => -1,
			'fields' => array(
				'ObiProducer.id', 'ObiProducer.name'
			),
			'order' => array(
				'ObiProducer.name'
			)
		));

		$obiMarks = $this->ObiMark->find('list', array(
			'recursive' => -1,
			'fields' => array(
				'ObiMark.id', 'ObiMark.name'
			),
			'order' => array(
				'ObiMark.name'
			)
		));

		foreach ($producers as $value) {

			$nProducer[$value['User']['id']] = $value['User']['obi_dostawca_id'] . ' ' .$value['User']['name'];

		}

		foreach ($categories as $value) {

			$nCategory[$value['ObiCategory']['id']] = ' (' .$value['ObiCategory']['obi_inner_category_id'].' / '.$value['ObiCategory']['obi_group_id'].') ' . $value['ObiCategory']['name'];

		}

		$producers = $nProducer;
		$categories = $nCategory;

		$this->set(compact('producers', 'categories', 'obiProducers', 'obiMarks'));

	}

	public function edit($productId) {

		if ($productId) {
			if ($this->request->is('post')) {
				/*
				debug($this->request->data);
				exit;*/

				$this->_filesPathMedia = 'files/products/';
				$this->RdsUpload->setUploadPath($this->_filesPathMedia);
				$this->RdsImage->setImagePath($this->_filesPathMedia);

				$this->ObiProduct->useValidationSet('add');
				$result = $this->RdsValidation->validate($this->ObiProduct, $this->request->data);

				if ($result === true) {
					$data = $this->request->data;

					if ($this->ObiProduct->saveAssociated($data)) {

						$this->__updateSearchResult($productId);
						$this->__clearNullMedia();

						$elementID = $productId;
						$jsonString = array(
							'simpleUserID' => $this->Auth->user('id'),
							'elementID' => $elementID,
							'elementModel' => 'ObiProduct'
						);
						$this->__saveGlobalNotification(4, json_encode($jsonString));

						if (isset($data['ObiProductMedia']['files']) && !empty($data['ObiProductMedia']['files'])) {

							foreach ($data['ObiProductMedia']['files'] as $fileType => $submittedFile) {

								if (!empty($submittedFile['add'])) {

									foreach ($submittedFile['add'] as $mediaFile) {
										$fileInfo = $this->RdsUpload->saveFile($mediaFile, true);
										$mediaArray = array(
											'obi_product_id' => $productId,
											'media_type' => $fileType,
											'src' => $fileInfo['name']
										);
										$this->ObiProductMedia->create();
										$this->ObiProductMedia->save($mediaArray);
									}
								}
							}
						}

						$this->rdsResponse->data = array(
							'redirect' => Router::url(array('controller' => 'products', 'action' => 'edit', $productId))
						);
					}
				} else $this->rdsResponse->errors = $result;
			}

			$product = $this->__getProductData($productId);

		} else {
			$this->_throw404();
		}

	}

	public function delete() {

		$id = $this->request->data;
		$obiProduct = $this->ObiProduct->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'ObiProduct.id' => $id,
			)
		));

		if ($obiProduct && $this->ObiProduct->delete($id)) {
			$this->ObiProductCategory->deleteAll(array('obi_product_id' => $id));
			$this->ObiProductData->deleteAll(array('obi_product_id' => $id));
			/*$this->ObiProductDataBasic->deleteAll(array('obi_product_id' => $id));
			$this->ObiProductDataLogistic->deleteAll(array('obi_product_id' => $id));
			$this->ObiProductMedia->deleteAll(array('obi_product_id' => $id));*/
			$this->rdsResponse->data = true;
		}
		else $this->rdsResponse->errors = $this->ObiProduct->messages['delete_error'];

	}

	public function deleteMedia() {

		if ($this->request->is('post')) {

			$data = $this->request->data;
			$this->ObiProductMedia->delete($data);
			$this->rdsResponse->data = true;
		}

	}

	public function manage() {

		$conditions = array();

		if ($this->Authorize->isAllowed($this->Auth->user('id'), array(9))) {
			$conditions['ObiProduct.user_id'] = $this->Auth->user('id');
		}

		$totalProducts = $this->ObiProduct->find('list', array(
			'recursive' => -1,
			'conditions' => $conditions
		));

		$this->set(compact('totalProducts'));

	}

	public function manage_marks() {

		$marks = $this->ObiMark->find('all', array(
			'recursive' => -1,
			'order' => array(
				'ObiMark.name'
			)
		));

		$this->set(compact('marks'));

	}

	public function mark_edit($markId) {

		if ($markId) {

			if ($this->request->is('post')) {

				$data = $this->request->data;
				$this->ObiMark->useValidationSet('add');
				$result = $this->RdsValidation->validate($this->ObiMark, $data);

				if ($result === true) {
					if ($this->ObiMark->save($data)) {

						$elementID = $markId;
						$jsonString = array(
							'simpleUserID' => $this->Auth->user('id'),
							'elementID' => $elementID,
							'elementModel' => 'ObiMark'
						);
						$this->__saveGlobalNotification(7, json_encode($jsonString));

						$this->rdsResponse->data = array(
							'redirect' => Router::url(array('controller' => 'products', 'action' => 'manage_marks'))
						);
					}
				} else $this->rdsResponse->errors = $result;
			}

			$markData = $this->ObiMark->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'ObiMark.id' => $markId
				)
			));

			if ($markData) {
				$this->set(compact('markData'));
			} else {
				$this->_throw404();
			}

		} else {
			$this->_throw404();
		}

	}

	public function mark_add() {

		if ($this->request->is('post')) {

			$data = $this->request->data;
			$this->ObiMark->useValidationSet('add');
			$result = $this->RdsValidation->validate($this->ObiMark, $data);

			if ($result === true) {
				if ($this->ObiMark->save($data)) {

					$elementID = $this->ObiMark->getLastInsertID();
					$jsonString = array(
						'simpleUserID' => $this->Auth->user('id'),
						'elementID' => $elementID,
						'elementModel' => 'ObiMark'
					);
					$this->__saveGlobalNotification(5, json_encode($jsonString));

					$this->rdsResponse->data = array(
						'redirect' => Router::url(array('controller' => 'products', 'action' => 'manage_marks'))
					);
				}
			} else $this->rdsResponse->errors = $result;
		}
	}

	public function manage_producers() {

		$producers = $this->ObiProducer->find('all', array(
			'recursive' => -1,
			'order' => array(
				'ObiProducer.name'
			)
		));

		$this->set(compact('producers'));

	}

	public function producer_edit($producerId) {

		if ($producerId) {

			if ($this->request->is('post')) {

				$data = $this->request->data;
				$this->ObiProducer->useValidationSet('add');
				$result = $this->RdsValidation->validate($this->ObiProducer, $data);

				if ($result === true) {
					if ($this->ObiProducer->save($data)) {

						$elementID = $producerId;
						$jsonString = array(
							'simpleUserID' => $this->Auth->user('id'),
							'elementID' => $elementID,
							'elementModel' => 'ObiProducer'
						);
						$this->__saveGlobalNotification(8, json_encode($jsonString));

						$this->rdsResponse->data = array(
							'redirect' => Router::url(array('controller' => 'products', 'action' => 'manage_producers'))
						);
					}
				} else $this->rdsResponse->errors = $result;
			}

			$producerData = $this->ObiProducer->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'ObiProducer.id' => $producerId
				)
			));

			if ($producerData) {
				$this->set(compact('producerData'));
			} else {
				$this->_throw404();
			}

		} else {
			$this->_throw404();
		}

	}

	public function producer_add() {

		if ($this->request->is('post')) {

			$data = $this->request->data;
			$this->ObiProducer->useValidationSet('add');
			$result = $this->RdsValidation->validate($this->ObiProducer, $data);

			if ($result === true) {
				if ($this->ObiProducer->save($data)) {

					$elementID = $this->ObiProducer->getLastInsertID();
					$jsonString = array(
						'simpleUserID' => $this->Auth->user('id'),
						'elementID' => $elementID,
						'elementModel' => 'ObiProducer'
					);
					$this->__saveGlobalNotification(6, json_encode($jsonString));

					$this->rdsResponse->data = array(
						'redirect' => Router::url(array('controller' => 'products', 'action' => 'manage_producers'))
					);
				}
			} else $this->rdsResponse->errors = $result;
		}
	}

	public function import() {

		if ($this->request->is('post')) {
			$data = $this->request->data;

			//debug($data);

			$mediaType = $data['ObiProductMedia']['media_type'];

			if (!empty($data['ObiProductMedia']['media']['add'])) {
				$this->Session->setFlash(__('Zaimportowano media !'), 'default', array('type' => 'success'));
				$this->rdsResponse->data = array(
					'redirect' => Router::url(array('controller' => 'products', 'action' => 'import'))
				);
			} else {
				$this->rdsResponse->errors = "Brak wgrywanych plików.";
			}

		}

	}

	public function import_products() {

		if ($this->request->is('post')) {

			$data = $this->request->data;

			if (isset($data['ObiProductMedia']['files']['add'][0])) {

				foreach($data['ObiProductMedia']['files']['add'] as $key => $submittedFile) {

					if ($fileInfo = $this->RdsUpload->saveFile($submittedFile, true)) {
						$file = array(
							'type' => $fileInfo['type'],
							'name' => $fileInfo['name'],
							'size' => $fileInfo['size'],
							'mime' => $fileInfo['mime'],
						);

						set_time_limit(300);

						$db = mysqli_connect("localhost", "root", "AccessPro#753#357", "OBI");
						$db->set_charset("utf8");

						function defineProductAttrs($obiCategoryDataId, $obiGroupId, $db, $productId, $obiInnerId, $attributeName, $at, $row) {

							if ($at && $row) {

								$sql1 = "SELECT `obi_product_id` FROM `obi_product_data_basics` WHERE `obi_product_inner_id`='".$productId."'";
								$query1 = $db->query($sql1);
								$obiProduct = $query1->fetch_assoc();

								$obiLocalProductId = $obiProduct['obi_product_id'];


								$sql4 = "INSERT INTO `obi_product_data`(`obi_product_id`, `obi_category_data_id`, `value`) VALUES ('".$obiLocalProductId."', '".$obiCategoryDataId."', '".$at."')";
								$query4 = $db->query($sql4);

							}

						}

						function definePattern($db, $obiGroupId, $obiInnerId, $attributeName) {

							$sql2 = "SELECT `id` FROM `obi_categories` WHERE `obi_group_id`='".$obiGroupId."' AND `obi_inner_category_id`='".$obiInnerId."'";
							$query2 = $db->query($sql2);
							$obiCategory = $query2->fetch_assoc();

							$obiLocalCategoryId = $obiCategory['id'];

							$sql3 = "INSERT INTO `obi_category_data`(`obi_category_id`, `obi_inner_category_id`, `name`) VALUES ('".$obiLocalCategoryId."', '".$obiInnerId."', '".$attributeName."')";
							$query3 = $db->query($sql3);
							$obiCategoryDataId = $db->insert_id;
							return $obiCategoryDataId;

						}

						$importFile = $_SERVER['DOCUMENT_ROOT'].'/app/webroot/'.$this->_filesPath . $file['name'];
						$pCount = 0;

						if ($file['type'] == 'xlsx') {
							require_once '/var/www/html/PLATFORMA_OBI/app/Lib/simplexlsx/simplexlsx.php';
							$xlsx = new SimpleXLSX($importFile);
							$rows = $xlsx->rows();
						} elseif ($file['type'] == 'xls') {
							require_once '/var/www/html/PLATFORMA_OBI/app/Lib/PHPExcel/Classes/PHPExcel.php';
							$xlsx = PHPExcel_IOFactory::load($importFile);
							$rows = $xlsx->getActiveSheet()->toArray(null,true,false,true);
						}

						if ($rows) {

							foreach ($rows as $rKey => $row) {

								$row = array_values($row);

								$obiGroupId = $row[4];

								if ($obiGroupId != 'Gr. towarowa') {

									$product6Digit = substr($row[0], 0, 6);

									if (is_numeric($product6Digit)) {

										$test = false;
										$productExistance = $this->__checkProductExistance($product6Digit);

										if ($productExistance) {

											$sqlLog = "UPDATE `obi_product_data_logistics` SET `product_width`='".$row[13]."',`product_height`='".$row[12]."',`product_weight`='".$row[15]."',`product_depth`='".$row[14]."', `modified`=NOW() WHERE `obi_product_id` = '".$productExistance."'";
											$db->query($sqlLog);

										} else {
											$sqlDostawca = "SELECT `id` FROM `users` WHERE `obi_dostawca_id` = '".$row[8]."'";
											$queryDostawca = $db->query($sqlDostawca);
											$dataDostawca = $queryDostawca->fetch_assoc();


											$dostawcaID = $row[8];
											$dostawcaUserId = $dataDostawca['id'];

											if (!empty($row[16])) {
											  $productName = $row[16];
											} else {
											  $productName = $row[0];
											}

											$sql = "INSERT INTO `obi_products` (`user_id`, `name`, `description`, `active`, `created`, `modified`)
											    VALUES
											    ('".$dostawcaUserId."', '".$productName."', '".$row[17]."', 1, NOW(), NOW());";
											$query = $db->query($sql);

											$productId = $db->insert_id;

											$sqlBasics = "INSERT INTO `obi_product_data_basics` (`obi_product_id`, `obi_product_inner_id`, `product_ean`, `product_producer`, `product_mark`, `product_marketing_description`, `opis_gr_towarowej`, `data_rejestracji`, `nazwa_dostawcy`, `nr_art_dostawcy`, `kategoria_wyszukiwania`)
											    VALUES
											    ('".$productId."', '".$product6Digit."', '".$row[11]."', '".$row[2]."', '".$row[2]."', '".$row[17]."', '".$row[5]."', '".$row[6]."', '".$row[9]."', '".$row[10]."', '".$row[18]."');";
											$queryBasics = $db->query($sqlBasics);

											$sqlLogistics = "INSERT INTO `obi_product_data_logistics` (`obi_product_id`, `product_width`, `product_height`, `product_weight`, `product_depth`)
											    VALUES
											    ('".$productId."', '".$row[13]."', '".$row[12]."', '".$row[15]."', '".$row[14]."');";
											$queryLogistics = $db->query($sqlLogistics);

											$imageName = $product6Digit.'_'.$dostawcaID.'.jpg';

											$sqlMedia = "INSERT INTO `obi_product_media` (`obi_product_id`, `media_type`, `src`)
											    VALUES
											    ('".$productId."', 'image', '".$imageName."');";
											$queryMedia = $db->query($sqlMedia);


											$sqlCategory = "SELECT `id` FROM `obi_categories` WHERE `name` = '".$row[18]."' AND `obi_group_id` = '".$obiGroupId."'";
											$queryCategory = $db->query($sqlCategory);
											$dataCategory = $queryCategory->fetch_assoc();

											$sqlCategoryInsert = "INSERT INTO `obi_product_categories` (`obi_product_id`, `obi_category_id`)
											    VALUES
											    ('".$productId."', '".$dataCategory['id']."');";
											$queryCategoryInsert = $db->query($sqlCategoryInsert);
										}

										$pCount++;

									}
								}
							}
/*
							$oii1 = false;
							$oii2 = false;
							$oii3 = false;
							$oii4 = false;
							$oii5 = false;
							$oii6 = false;
							$oii7 = false;
							$oii8 = false;
							$oii9 = false;
							$oii10 = false;
							$atv1 = false;
							$atv2 = false;
							$atv3 = false;
							$atv4 = false;
							$atv5 = false;
							$atv6 = false;
							$atv7 = false;
							$atv8 = false;
							$atv9 = false;
							$atv10 = false;

							//--- 1

							if (!empty($rows[0][19])) {

								$a = explode("_", $rows[0][19]);
								$oii1 = $a[0];
								$atv1 = end($a);
								$ocd1 = definePattern($db, $obiGroupId, $oii1, $atv1);
							}

							//--- 2

							if (!empty($rows[0][20])) {
								$b = explode("_", $rows[0][20]);
								$oii2 = $b[0];
								$atv2 = end($b);
								$ocd2 = definePattern($db, $obiGroupId, $oii2, $atv2);
							}

							//--- 3

							if (!empty($rows[0][21])) {
								$c = explode("_", $rows[0][21]);
								$oii3 = $c[0];
								$atv3 = end($c);
								$ocd3 = definePattern($db, $obiGroupId, $oii3, $atv3);
							}

							//--- 4

							if (!empty($rows[0][22])) {
								$d = explode("_", $rows[0][22]);
								$oii4 = $d[0];
								$atv4 = end($d);
								$ocd4 = definePattern($db, $obiGroupId, $oii4, $atv4);
							}

							//--- 5

							if (!empty($rows[0][23])) {
								$e = explode("_", $rows[0][23]);
								$oii5 = $e[0];
								$atv5 = end($e);
								$ocd5 = definePattern($db, $obiGroupId, $oii5, $atv5);
							}

							//--- 6

							if (!empty($rows[0][24])) {
								$f = explode("_", $rows[0][24]);
								$oii6 = $f[0];
								$atv6 = end($f);
								$ocd6 = definePattern($db, $obiGroupId, $oii6, $atv6);
							}

							//--- 7

							if (!empty($rows[0][25])) {
								$g = explode("_", $rows[0][25]);
								$oii7 = $g[0];
								$atv7 = end($g);
								$ocd7 = definePattern($db, $obiGroupId, $oii7, $atv7);
							}

							//--- 8

							if (!empty($rows[0][26])) {
								$h = explode("_", $rows[0][26]);
								$oii8 = $h[0];
								$atv8 = end($h);
								$ocd8 = definePattern($db, $obiGroupId, $oii8, $atv8);
							}

							//--- 9

							if (!empty($rows[0][27])) {
								$i = explode("_", $rows[0][27]);
								$oii9 = $i[0];
								$atv9 = end($i);
								$ocd9 = definePattern($db, $obiGroupId, $oii9, $atv9);
							}

							//--- 10

							if (!empty($rows[0][28])) {
								$j = explode("_", $rows[0][28]);
								$oii10 = $j[0];
								$atv10 = end($j);
								$ocd10 = definePattern($db, $obiGroupId, $oii10, $atv10);
							}


							foreach ($rows as $rKey => $row) {

								if (is_numeric($row[0])) {
									$at1 = $row[19];
									$at2 = $row[20];
									$at3 = $row[21];
									$at4 = $row[22];
									$at5 = $row[23];
									$at6 = $row[24];
									$at7 = $row[25];
									$at8 = $row[26];
									$at9 = $row[27];
									$at10 = $row[28];
									$pid = $row[0];

									if (isset($at1) && !empty($at1) && $at1 != '--' && $oii1) defineProductAttrs($ocd1, $obiGroupId, $db, $pid, $oii1, $atv1, $at1, $row);
									if (isset($at2) && !empty($at2) && $at2 != '--' && $oii2) defineProductAttrs($ocd2, $obiGroupId, $db, $pid, $oii2, $atv2, $at2, $row);
									if (isset($at3) && !empty($at3) && $at3 != '--' && $oii3) defineProductAttrs($ocd3, $obiGroupId, $db, $pid, $oii3, $atv3, $at3, $row);
									if (isset($at4) && !empty($at4) && $at4 != '--' && $oii4) defineProductAttrs($ocd4, $obiGroupId, $db, $pid, $oii4, $atv4, $at4, $row);
									if (isset($at5) && !empty($at5) && $at5 != '--' && $oii5) defineProductAttrs($ocd5, $obiGroupId, $db, $pid, $oii5, $atv5, $at5, $row);
									if (isset($at6) && !empty($at6) && $at6 != '--' && $oii6) defineProductAttrs($ocd6, $obiGroupId, $db, $pid, $oii6, $atv6, $at6, $row);
									if (isset($at7) && !empty($at7) && $at7 != '--' && $oii7) defineProductAttrs($ocd7, $obiGroupId, $db, $pid, $oii7, $atv7, $at7, $row);
									if (isset($at8) && !empty($at8) && $at8 != '--' && $oii8) defineProductAttrs($ocd8, $obiGroupId, $db, $pid, $oii8, $atv8, $at8, $row);
									if (isset($at9) && !empty($at9) && $at9 != '--' && $oii9) defineProductAttrs($ocd9, $obiGroupId, $db, $pid, $oii9, $atv9, $at9, $row);
									if (isset($at10) && !empty($at10) && $at10 != '--' && $oii10) defineProductAttrs($ocd10, $obiGroupId, $db, $pid, $oii10, $atv10, $at10, $row);


								}
							}
*/
							$this->Session->setFlash(__('Zaimportowano: '.$pCount.' produktów'), 'default', array('type' => 'success'));
							$this->rdsResponse->data = array(
								'redirect' => Router::url(array('controller' => 'products', 'action' => 'import'))
							);

						}



					}
				}
			}

		}
	}

	public function import_media() {

		if ($this->request->is('post')) {

			$data = $this->request->data;

			if (isset($data['ObiProductMedia']['media']['add'][0])) {

				function generateRandomString($length = 10) {

					$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
					$charactersLength = strlen($characters);
					$randomString = '';
					for ($i = 0; $i < $length; $i++) {
						$randomString .= $characters[rand(0, $charactersLength - 1)];
					}
					return $randomString;
				}

				function unzip($location,$new_location){
					exec("unzip -o $location -d $new_location");
					unlink($location);
					return true;
				}


				$mediaTempDir = generateRandomString(10);
				$mediaUploadDir = '/var/www/html/PLATFORMA_OBI/app/webroot/files/import_media/'.$mediaTempDir.'/';
				$mediaProductsDir = '/var/www/html/PLATFORMA_OBI/app/webroot/files/products/';

				mkdir($mediaUploadDir, 0777);

				$this->_filesPath = 'files/import_media/'.$mediaTempDir.'/';
				$this->RdsUpload->setUploadPath($this->_filesPath);

				foreach($data['ObiProductMedia']['media']['add'] as $key => $submittedFile) {

					if ($fileInfo = $this->RdsUpload->saveFile($submittedFile, true)) {
						$file = array(
							'type' => $fileInfo['type'],
							'name' => $fileInfo['name'],
							'size' => $fileInfo['size'],
							'mime' => $fileInfo['mime'],
						);

						set_time_limit(300);

						unzip($mediaUploadDir.$file['name'], $mediaUploadDir);

						if ($handle = opendir($mediaUploadDir)) {

							while (false !== ($entry = readdir($handle))) {

								if ($entry != "." && $entry != "..") {

									if (substr($entry, -6) == '_1.jpg' || substr($entry, -6) == '_1.JPG') {
										$ending = substr($entry, -4);
									} else {
										$ending = substr($entry, -6);
									}

									$entryTemp = str_replace('__', '_' , $entry);

									$oldName = explode("_", $entryTemp);

									$fragment = substr($oldName[0], 0, 6) . '_' . $oldName[1];

									$newFileName = str_replace('__', '_', str_replace('JPG', 'jpg', $fragment . $ending));

									$path = $mediaUploadDir.'/'.$entry;
									$newPath = $mediaProductsDir.'/'.$newFileName;

									rename($path, $newPath);

									if (is_numeric($oldName[0])) {

										$product6 = $this->ObiProductDataBasics->find('first', array(
											'recursive' => -1,
											'conditions' => array(
												'obi_product_inner_id' => $oldName[0]
											),
											'fields' => array(
												'obi_product_id'
											)
										));

										if ($product6) {

											$this->ObiProductMedia->create();
											$this->ObiProductMedia->save(array(
												'obi_product_id' => $product6['ObiProductDataBasics']['obi_product_id'],
												'media_type' => $data['ObiProductMedia']['media_type'],
												'src' => $newFileName
											));

										}



									}

								}
							}

							closedir($handle);
						}
					}
				}

				$this->Session->setFlash(__('Materiały zostały zaimportowane'), 'default', array('type' => 'success'));
				$this->rdsResponse->data = array(
					'redirect' => Router::url(array('controller' => 'products', 'action' => 'import'))
				);
			}
		}

	}

	public function export_products() {
		/*
		error_reporting(E_ALL);
		ini_set('display_errors', TRUE);
		ini_set('display_startup_errors', TRUE);*/

		require_once '../Lib/PHPExcel/Classes/PHPExcel.php';

		$conditions = array();

		if ($this->Authorize->isAllowed($this->Auth->user('id'), array(9))) {
			$conditions['ObiProduct.user_id'] = $this->Auth->user('id');
		}

		$products = $this->ObiProduct->find('all', array(
			'recursive' => 0,
			'conditions' => $conditions,
			'group' => array('ObiProduct.id')
		));

		$objPHPExcel = new PHPExcel();
		$objPHPExcel->getProperties()->setCreator("PRODUKTYOBI.PL");

		$objPHPExcel->setActiveSheetIndex(0)
					->setCellValue('A1', 'Artykuł')
					->setCellValue('B1', '')
					->setCellValue('C1', 'Nazwa marki')
					->setCellValue('D1', 'GGT')
					->setCellValue('E1', 'Gr. towarowa')
					->setCellValue('F1', 'Opis gr. towarowej')
					->setCellValue('G1', 'Data rejestracji')
					->setCellValue('H1', 'Aktualny stan')
					->setCellValue('I1', 'Dostawca')
					->setCellValue('J1', 'Nazwa dostawcy')
					->setCellValue('K1', 'NrArtDostawcy')
					->setCellValue('L1', 'EAN zamówieniowy')
					->setCellValue('M1', 'Wysokość w mm')
					->setCellValue('N1', 'Szerokość w mm')
					->setCellValue('O1', 'Głębokość w mm')
					->setCellValue('P1', 'Ciężar w kg')
					->setCellValue('Q1', 'Wysokość z opakowaniem w mm')
					->setCellValue('R1', 'Szerokość z opakowaniem w mm')
					->setCellValue('S1', 'Głębokość z opakowaniem w mm')
					->setCellValue('T1', 'Ciężar z opakowaniem w kg')
					->setCellValue('U1', 'Tytuł artykułu online')
					->setCellValue('V1', 'Opis artykułu')
					->setCellValue('W1', 'Kategoria wyszukiwania')
					->setCellValue('X1', 'Znacznik set')
					->setCellValue('Y1', 'Kraj pochodzenia')
					->setCellValue('Z1', 'Taryfa celna')
					->setCellValue('AA1', 'Dane zatwierdzone')
					->setCellValue('AB1', 'Data zatwierdzenia')
					->setCellValue('AC1', 'Opakowanie zbiorcze')
					->setCellValue('AD1', 'Karton_1 szerokość')
					->setCellValue('AF1', 'Karton_1 wysokość')
					->setCellValue('AG1', 'Karton_1 głębokość')
					->setCellValue('AH1', 'Karton_1 waga')
					->setCellValue('AI1', 'Karton_1 ilość')
					->setCellValue('AJ1', 'Paleta_1 szerokość')
					->setCellValue('AK1', 'Paleta_1 wysokość')
					->setCellValue('AL1', 'Paleta_1 głębokość')
					->setCellValue('AM1', 'Paleta_1 waga')
					->setCellValue('AN1', 'Paleta_1 ilość');

		$lp = 1;

		foreach($products as $key => $value) {

			$lp++;

			$objPHPExcel->setActiveSheetIndex(0)
					->setCellValue('A'.$lp, $value['ObiProductDataBasics']['obi_product_inner_id'])
					->setCellValue('B'.$lp, '')
					->setCellValue('C'.$lp, $value['ObiProductDataBasics']['product_mark'])
					->setCellValue('D'.$lp, $value['ObiProductDataBasics']['gr_towarowa'])
					->setCellValue('E'.$lp, $value['ObiProductDataBasics']['gr_towarowa'])
					->setCellValue('F'.$lp, $value['ObiProductDataBasics']['opis_gr_towarowej'])
					->setCellValue('G'.$lp, $value['ObiProductDataBasics']['data_rejestracji'])
					->setCellValue('H'.$lp, 'Aktywny')
					->setCellValue('I'.$lp, $value['ObiProductDataBasics']['nazwa_dostawcy'])
					->setCellValue('J'.$lp, $value['ObiProductDataBasics']['nazwa_dostawcy'])
					->setCellValue('K'.$lp, $value['ObiProductDataBasics']['nr_art_dostawcy'])
					->setCellValue('L'.$lp, ' '.$value['ObiProductDataBasics']['product_ean'].' ')
					->setCellValue('M'.$lp, $value['ObiProductDataLogistics']['product_height'])
					->setCellValue('N'.$lp, $value['ObiProductDataLogistics']['product_width'])
					->setCellValue('O'.$lp, $value['ObiProductDataLogistics']['product_depth'])
					->setCellValue('P'.$lp, $value['ObiProductDataLogistics']['product_weight'])
					->setCellValue('Q'.$lp, $value['ObiProductDataLogistics']['product_package_height'])
					->setCellValue('R'.$lp, $value['ObiProductDataLogistics']['product_package_width'])
					->setCellValue('S'.$lp, $value['ObiProductDataLogistics']['product_package_depth'])
					->setCellValue('T'.$lp, $value['ObiProductDataLogistics']['product_package_weight'])
					->setCellValue('U'.$lp, $value['ObiProduct']['name'])
					->setCellValue('V'.$lp, $value['ObiProduct']['description'])
					->setCellValue('W'.$lp, $value['ObiProductDataBasics']['kategoria_wyszukiwania'])
					->setCellValue('X'.$lp, $value['ObiProductDataLogistics']['znacznik_set'])
					->setCellValue('Y'.$lp, $value['ObiProductDataLogistics']['kraj_pochodzenia'])
					->setCellValue('Z'.$lp, $value['ObiProductDataLogistics']['taryfa_celna'])
					->setCellValue('AA'.$lp, $value['ObiProductDataLogistics']['dane_zatwierdzone'])
					->setCellValue('AB'.$lp, $value['ObiProductDataLogistics']['data_zatwierdzenia'])
					->setCellValue('AC'.$lp, $value['ObiProductDataLogistics']['minimalna_szt']);


			if (isset($value['ObiProductDataKartons'])) {
				$objPHPExcel->setActiveSheetIndex(0)
					->setCellValue('AD'.$lp, $value['ObiProductDataKartons']['karton_szerokosc'])
					->setCellValue('AF'.$lp, $value['ObiProductDataKartons']['karton_wysokosc'])
					->setCellValue('AG'.$lp, $value['ObiProductDataKartons']['karton_glebokosc'])
					->setCellValue('AH'.$lp, $value['ObiProductDataKartons']['karton_waga'])
					->setCellValue('AI'.$lp, $value['ObiProductDataKartons']['karton_ilosc']);
			} else {
				$objPHPExcel->setActiveSheetIndex(0)
					->setCellValue('AD'.$lp, '-')
					->setCellValue('AF'.$lp, '-')
					->setCellValue('AG'.$lp, '-')
					->setCellValue('AH'.$lp, '-')
					->setCellValue('AI'.$lp, '-');
			}

			if (isset($value['ObiProductDataPaleta'])) {
				$objPHPExcel->setActiveSheetIndex(0)
					->setCellValue('AJ'.$lp, $value['ObiProductDataPaleta']['paleta_szerokosc'])
					->setCellValue('AK'.$lp, $value['ObiProductDataPaleta']['paleta_wysokosc'])
					->setCellValue('AL'.$lp, $value['ObiProductDataPaleta']['paleta_glebokosc'])
					->setCellValue('AM'.$lp, $value['ObiProductDataPaleta']['paleta_waga'])
					->setCellValue('AN'.$lp, $value['ObiProductDataPaleta']['paleta_ilosc']);
			} else {
				$objPHPExcel->setActiveSheetIndex(0)
					->setCellValue('AJ'.$lp, '-')
					->setCellValue('AK'.$lp, '-')
					->setCellValue('AL'.$lp, '-')
					->setCellValue('AM'.$lp, '-')
					->setCellValue('AN'.$lp, '-');
			}
			//break;

		}

		$objPHPExcel->getActiveSheet()->setTitle('Produkty');

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

		$pathToSave = $_SERVER['DOCUMENT_ROOT'].'/app/webroot/files/xlsx/1–Item_POL.xls';

		$objWriter->save($pathToSave);


		$this->rdsResponse->data = "/files/xlsx/1–Item_POL.xls";


	}

	public function logistic_data() {

		$users = $this->User->find('all', array(
			'recursive' => -1,
			'conditions' => array(
				'not' => array('User.obi_dostawca_id' => null)
			)
		));

		$this->set(compact('users'));

	}

	public function checkimages() {

		$this->autoRender = false;

		$photos = $this->ObiProductMedia->find('all');

		if ($photos) {

			$lp = 1;
			$fe = 0;
			$ne = 0;

			foreach ($photos as $photo) {

				if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/app/webroot/files/products/'.$photo['ObiProductMedia']['src'])) {
					$fe++;
					echo $lp." Plik ".$photo['ObiProductMedia']['src']." istnieje<br/>";

				} else {
					$ne++;
					echo $lp." Plik ".$photo['ObiProductMedia']['src']." nie istnieje<br/>";

					$this->ObiProductMedia->delete($photo['ObiProductMedia']['id']);

				}

				$lp++;

			}

		}

	}

	protected function __getUserProducts() {

		$conditions = array();

		if ($this->Authorize->isAllowed($this->Auth->user('id'), array(9))) {
			$conditions['ObiProduct.user_id'] = $this->Auth->user('id');
		}

		$tempProducts = $this->ObiProduct->find('all', array(
			'recursive' => -1,
			'conditions' => $conditions,
			'fields' => array(
				'DISTINCT ObiProduct.id', 'ObiProduct.name', 'ObiProduct.user_id'
			)
		));

		foreach ($tempProducts as $value) {


			$value['ConnOrder'] = $this->ConnOrder->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'obi_product_id' => $value['ObiProduct']['id']
				)
			));
			$products[] = $value;
		}

		if ($products) {
			return $products;
		} else {
			return null;
		}

	}

	protected function __getProductData($productId) {

		if ($productId) {

			$product = $this->ObiProduct->find('first', array(
				'recursive' => 2,
				'conditions' => array(
					'ObiProduct.id' => $productId
				)
			));

			$opc = $product['ObiProductCategory']['obi_category_id'];

			$categoryAttrs = array();

			$categoryAttrs = $this->ObiCategoryData->find('all', array(
				'recursive' => -1,
				'conditions' => array(
					'ObiCategoryData.obi_category_id' => $opc
				)
			));


			if (!empty($product['ObiProductData'])) {

				foreach ($product['ObiProductData'] as $key => $value) {

					$categoryData = $this->ObiCategoryData->find('first', array(
						'recursive' => -1,
						'conditions' => array(
							'ObiCategoryData.id' => $value['obi_category_data_id']
						)
					));

					$product['ObiProductData'][$key][] = $categoryData;

				}

			}

			$categories = $this->ObiCategory->find('all', array(
				'recursive' => -1,
				'fields' => array(
					'ObiCategory.id', 'ObiCategory.name',  'ObiCategory.obi_inner_category_id', 'ObiCategory.obi_group_id'
				),
				'order' => array(
					'ObiCategory.name'
				)
			));

			$producers = $this->UserRoleAssociation->find('all', array(
				'recursive' => 1,
				'fields' => array(
					'User.id', 'User.name', 'User.obi_dostawca_id'
				),
				'conditions' => array(
					'UserRoleAssociation.user_role_id' => 9
				)
			));

			$obiProducers = $this->ObiProducer->find('list', array(
				'recursive' => -1,
				'fields' => array(
					'ObiProducer.id', 'ObiProducer.name'
				),
				'order' => array(
					'ObiProducer.name'
				)
			));

			$obiMarks = $this->ObiMark->find('list', array(
				'recursive' => -1,
				'fields' => array(
					'ObiMark.id', 'ObiMark.name'
				),
				'order' => array(
					'ObiMark.name'
				)
			));

			foreach ($producers as $value) {

				$nProducer[$value['User']['id']] = $value['User']['obi_dostawca_id'] . ' ' .$value['User']['name'];

			}

			foreach ($categories as $value) {

				$nCategory[$value['ObiCategory']['id']] = ' (' .$value['ObiCategory']['obi_inner_category_id'].' / '.$value['ObiCategory']['obi_group_id'].') ' . $value['ObiCategory']['name'];

			}

			$producers = $nProducer;
			$categories = $nCategory;

			$this->set(compact('product', 'producers', 'categories', 'categoryAttrs', 'obiProducers', 'obiMarks'));


		} else {
			return FALSE;
		}

	}

	protected function __getProductDataPdf($productId) {

		if ($productId) {

			$product = $this->ObiProduct->find('first', array(
				'recursive' => 2,
				'conditions' => array(
					'ObiProduct.id' => $productId
				)
			));

			//debug($product);

			$opc = $product['ObiProductCategory']['obi_category_id'];

			$categoryAttrs = array();

			$categoryAttrs = $this->ObiCategoryData->find('all', array(
				'recursive' => -1,
				'conditions' => array(
					'ObiCategoryData.obi_category_id' => $opc
				)
			));


			if (!empty($product['ObiProductData'])) {

				foreach ($product['ObiProductData'] as $key => $value) {

					$categoryData = $this->ObiCategoryData->find('first', array(
						'recursive' => -1,
						'conditions' => array(
							'ObiCategoryData.id' => $value['obi_category_data_id']
						)
					));

					$product['ObiProductData'][$key][] = $categoryData;

				}

			}

			$categories = $this->ObiCategory->find('all', array(
				'recursive' => -1,
				'fields' => array(
					'ObiCategory.id', 'ObiCategory.name',  'ObiCategory.obi_inner_category_id', 'ObiCategory.obi_group_id'
				),
				'order' => array(
					'ObiCategory.name'
				)
			));

			$producers = $this->UserRoleAssociation->find('all', array(
				'recursive' => 1,
				'fields' => array(
					'User.id', 'User.name', 'User.obi_dostawca_id'
				),
				'conditions' => array(
					'UserRoleAssociation.user_role_id' => 9
				)
			));

			foreach ($producers as $value) {

				$nProducer[$value['User']['id']] = $value['User']['obi_dostawca_id'] . ' ' .$value['User']['name'];

			}

			foreach ($categories as $value) {

				$nCategory[$value['ObiCategory']['id']] = ' (' .$value['ObiCategory']['obi_inner_category_id'].' / '.$value['ObiCategory']['obi_group_id'].') ' . $value['ObiCategory']['name'];

			}

			$producers = $nProducer;
			$categories = $nCategory;

			$data['product'] = $product;
			$data['producers'] = $producers;
			$data['categories'] = $categories;
			$data['categoryAttrs'] = $categoryAttrs;

			return $data;


		} else {
			return FALSE;
		}

	}

	protected function __updateSearchResult($productID) {

		if ($productID) {

			$search = $this->ObiProductDataSearchResult->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'ObiProductDataSearchResult.obi_product_id' => $productID
				),
				'fields' => array(
					'ObiProductDataSearchResult.id'
				)
			));

			$product = $this->ObiProduct->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'ObiProduct.id' => $productID
				),
				'fields' => array(
					'ObiProduct.name', 'ObiProduct.user_id'
				)
			));

			$productBasics = $this->ObiProductDataBasics->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'ObiProductDataBasics.obi_product_id' => $productID
				),
				'fields' => array(
					'ObiProductDataBasics.obi_product_inner_id', 'ObiProductDataBasics.product_ean'
				)
			));

			$productThumb = $this->ObiProductMedia->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'ObiProductMedia.obi_product_id' => $productID,
					'ObiProductMedia.media_type' => 'image'
				),
				'fields' => array(
					'ObiProductMedia.src'
				)
			));

			$productCategory = $this->ObiProductCategory->find('first', array(
				'recursive' => 0,
				'conditions' => array(
					'ObiProductCategory.obi_product_id' => $productID,
				),
			));

			if (isset($productCategory['ObiCategory'])) {
				$pCat = $productCategory['ObiCategory']['name'];
			} else {
				$pCat = '-';
			}

			if (isset($productThumb['ObiProductMedia'])) {
				$pThu = $productThumb['ObiProductMedia']['src'];
			} else {
				$pThu = NULL;
			}

			$data = array(
				'id' => $search['ObiProductDataSearchResult']['id'],
				'name' => $product['ObiProduct']['name'],
				'ean' => $productBasics['ObiProductDataBasics']['product_ean'],
				'category_name' => $pCat,
				'obi_inner_id' => $productBasics['ObiProductDataBasics']['obi_product_inner_id'],
				'thumb_url' => $pThu,
				'user_id' => $product['ObiProduct']['user_id'],
			);

			if ($this->ObiProductDataSearchResult->save($data)) {
				return TRUE;
			} else {
				return FALSE;
			}

		}

	}

	protected function __clearNullMedia() {

		$this->ObiProductMedia->deleteAll(array(
			'ObiProductMedia.src' => null
		));

	}

	protected function __checkProductExistance($obi6Digit) {

		$existance = $this->ObiProductDataBasics->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'obi_product_inner_id' => $obi6Digit
			)
		));

		if (empty($existance)) {
			return FALSE;
		} else {
				if (!empty($existance['ObiProductDataBasics']['obi_product_id'])) {
					return $existance['ObiProductDataBasics']['obi_product_id'];
				} else {
					return FALSE;
				}

		}

	}

}
