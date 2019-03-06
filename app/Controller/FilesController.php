<?php
App::uses('AppController', 'Controller');

class FilesController extends AppController {

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
    );
	public $components = array();

	public function beforeFilter() {

		parent::beforeFilter();
		$this->Security->addUnlockedActions(

		);
	}

	public function public_media_link() {

		$this->autoRender = false;

		$limiter = 0;
		$mediaDirectory = $_SERVER['DOCUMENT_ROOT'].'/app/webroot/files/products/';

		if ($handle = opendir($mediaDirectory)) {
			while (false !== ($entry = readdir($handle))) {

				//if ($limiter > 15) break;




				if (strlen($entry) > 10) {
					if (!$this->__mediaDbExists(trim($entry))) {
								$this->__createMedia($entry);
					}
				}

				//$limiter++;
	    }
		}
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


	protected function __clearNullMedia() {

		$this->ObiProductMedia->deleteAll(array(
			'ObiProductMedia.src' => null
		));

	}

	protected function __mediaDbExists($mediaName) {

		if ($mediaName && !empty($mediaName)) {

			$result = $this->ObiProductMedia->find('first', array(
				'recursive' => -1,
				'conditions' => array(
						'src' => $mediaName
				)
			));

			if (!empty($result)) {
				return TRUE;
			} else {
				return FALSE;
			}
		}
	}

	protected function __createMedia($mediaName) {

		if ($mediaName && !empty($mediaName)) {
			$mediaName = str_replace("|", "", $mediaName);
			//$wrongCharacters = array('ů', '¦', 'Ť', 'é', '+', ',', ' - ',' ','ę', 'Ę', 'ó', 'Ó', 'Ą', 'ą', 'Ś', 's', 'ł', 'Ł', 'ż', 'Ż', 'Ź', 'ź', 'ć', 'Ć', 'ń', 'Ń','-',"'","/","?", '"', ":", 'ś', '!', '&', '&', '#', ';', '[',']','domena.pl', '(', ')', '`', '%', '”', '„', '…');
			//$correctCharacters = array('', '', 't', '', '', '-','-','-','e', 'e', 'o', 'o', 'a', 'a', 's', 's', 'l', 'l', 'z', 'z', 'z', 'z', 'c', 'c', 'n', 'n','-',"","","","","",'s','','', '', '', '', '', '', '', '', '', '', '', '');
			//echo str_replace($wrongCharacters, $correctCharacters, $entry) . "<br/>";

			$mediaParts = explode("_", $mediaName);

			if (count($mediaParts) > 1) {
				if (strlen($mediaParts[0]) == 6 && is_numeric($mediaParts[0])) {

					$product = $this->ObiProductDataBasics->find('first', array(
						'recursive' => -1,
						'conditions' => array(
							'ObiProductDataBasics.obi_product_inner_id' => $mediaParts[0]
						)
					));

					if (!empty($product)) {
						$insertMedia = array(
							'obi_product_id' => $product['ObiProductDataBasics']['obi_product_id'],
							'media_type' => 'image',
							'src' => $mediaName
						);

						$this->ObiProductMedia->create();
						$this->ObiProductMedia->save($insertMedia);

						//echo "Zapisano media: ".$mediaName."<br/>";

					} else {
							return FALSE;
					}
				} else {
					return FALSE;
				}
			} else {
				return FALSE;
			}
		}
	}
}
