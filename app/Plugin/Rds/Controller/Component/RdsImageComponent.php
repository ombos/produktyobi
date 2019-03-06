<?php

App::uses('Component', 'Controller');

class RdsImageComponent extends Component {
	
	public static $THUMBNAIL = array(
		'prefix' => 'tn_',
		'width' => 100,
		'height' => 100,
		'crop' => true,
		'enlarge' => true
	);
	
	protected $_imagePath;
	protected $_types = array();
	
	public function initialize(Controller $controller) {
		
		if (isset($this->settings['thumbnail'])) {
			foreach ($this->settings['thumbnail'] as $key => $value) {
				self::$THUMBNAIL[$key] = $value;
			}
		}
		
		if (isset($this->settings['types'])) {
			foreach ($this->settings['types'] as $name => $sizes) {
				$type = array();
				foreach ($sizes as $size) {
					if (!empty($size['prefix']) && $size['prefix'] != self::$THUMBNAIL['prefix']) {
						if (!isset($size['width'])) $size['width'] = 0;
						if (!isset($size['height'])) $size['height'] = 0;
						if (!isset($size['crop'])) $size['crop'] = false;
						if (!isset($size['enlarge'])) $size['enlarge'] = true;
						$type[] = $size;
					}
				}
				if (count($type) != 0) $this->_types[$name] = $type;
			}
		}
		
        $this->_imagePath = APP.WEBROOT_DIR.DS.'upload'.DS;
		parent::initialize($controller);
		
	}
    
    public function setImagePath($path) {
        
        $this->_imagePath = APP.WEBROOT_DIR.DS.$path;
        
    }
	
	public function url($name) {
		
		return $this->_imagePath.$name;
		
	}
	
	public function exists($name) {
		
		return file_exists($this->_imagePath.$name);
		
	}
	
	public function confirm($name) {
		
		return $this->exists($name) ? $name : null;
		
	}
	
	public function convert($path, $type = null) {
		
        $path = $this->_imagePath.$path;
		if (!empty($path)) {
			if (file_exists($path)) {
			    $basename = $this->_getBasename($path);
                $extension = $this->_getExtension($path);
                $name = str_replace('.'.$extension, '', $basename);
				$this->_convertOne($path, $this->_imagePath, self::$THUMBNAIL['prefix'].$name, $extension, self::$THUMBNAIL['width'], self::$THUMBNAIL['height'], self::$THUMBNAIL['crop'], self::$THUMBNAIL['enlarge']);
				if ($type && isset($this->_types[$type])) {
					foreach ($this->_types[$type] as $size) {
						$this->_convertOne($path, $this->_imagePath, $size['prefix'].$name, $extension, $size['width'], $size['height'], $size['crop'], $size['enlarge']);
					}
				}
				return $name.'.'.$extension;
			}
		}
		return null;
		
	}
	
	public function delete($path, $type = null) {
		
		@unlink($this->_imagePath.self::$THUMBNAIL['prefix'].$path);
		if ($type && isset($this->_types[$type])) {
			foreach ($this->_types[$type] as $size) {
				@unlink($this->_imagePath.$size['prefix'].$path);
			}
		}
		
	}
    
    public function regenerateImages($name, $type) {
        
        $path = $this->_imagePath.$name;
        if (file_exists($path)) {
            $extension = $this->_getExtension($path);
            $nameWithoutExt = str_replace('.'.$extension, '', $name);
            if (isset($this->_types[$type])) {
                foreach ($this->_types[$type] as $size) {
                    $this->_convertOne($path, $this->_imagePath.'images/', $size['prefix'].$nameWithoutExt, $extension, $size['width'], $size['height'], $size['crop'], $size['enlarge']);
                }
            }
        }
        
    }
	
	protected function _convertOne($source, $destinationDir, $name, $extension, $width, $height, $crop, $enlarge) {
		
		$createFunction;
		$saveFunction;
        $compressionLevel;
		switch ($extension) {
            case 'jpg':
                $createFunction = 'imagecreatefromjpeg';
                $saveFunction = 'imagejpeg';
                $compressionLevel = 90;
                break;
                
            case 'jpeg':
                $createFunction = 'imagecreatefromjpeg';
                $saveFunction = 'imagejpeg';
                $compressionLevel = 90;
                break;
			
			case 'png':
				$createFunction = 'imagecreatefrompng';
				$saveFunction = 'imagepng';
                $compressionLevel = 0;
				break;
			
			case 'gif':
				$createFunction = 'imagecreatefromgif';
				$saveFunction = 'imagegif';
                $compressionLevel = 0;
				break;
		}
		
		$info = getimagesize($source);
		$originalWidth = $info[0];
		$originalHeight = $info[1];
		$sourceWidth = $originalWidth;
		$sourceHeight = $originalHeight;
		$destination = $destinationDir.$name.'.'.$extension;
		
		if ($enlarge || ($width != 0 && $sourceWidth > $width) || ($height != 0 && $sourceHeight > $height)) {
			$sourceX = 0;
			$sourceY = 0;
			$destinationWidth;
			$destinationHeight;
			
			if ($width != 0 && $height != 0) {
				if ($sourceWidth / $sourceHeight > $width / $height) {
					if ($crop) {
						$destinationHeight = $height;
						$destinationWidth = $width;
						$sourceWidth = $destinationWidth * ($sourceHeight / $destinationHeight);
						$sourceX = ($originalWidth - $sourceWidth) / 2;
					} else {
						$destinationWidth = $width;
						$destinationHeight = $sourceHeight * $destinationWidth / $sourceWidth;
					}
				} else {
					if ($crop) {
						$destinationWidth = $width;
						$destinationHeight = $height;
						$sourceHeight = $destinationHeight * ($sourceWidth / $destinationWidth);
						$sourceY = ($originalHeight - $sourceHeight) / 2;
					} else {
						$destinationHeight = $height;
						$destinationWidth = $sourceWidth * $destinationHeight / $sourceHeight;
					}
				}
			} elseif ($width != 0) {
				$destinationWidth = $width;
				$destinationHeight = $sourceHeight * $destinationWidth / $sourceWidth;
			} else {
				$destinationHeight = $height;
				$destinationWidth = $sourceWidth * $destinationHeight / $sourceHeight;
			}
			
			$sourceImage = $createFunction($source);
			$destinationImage = imagecreatetruecolor($destinationWidth, $destinationHeight);
            
            if ($extension == 'png') {
                imagealphablending($destinationImage, false);
                imagesavealpha($destinationImage, true);
            }
            
			imagecopyresampled($destinationImage, $sourceImage, 0, 0, $sourceX, $sourceY, $destinationWidth, $destinationHeight, $sourceWidth, $sourceHeight);
			$saveFunction($destinationImage, $destination, $compressionLevel);
		} else copy($source, $destination);
		
	}
    
    protected function _getExtension($path) {
        
        $pathInfo = pathinfo($path);
        return $pathInfo['extension'];
        
    }
    
    protected function _getBasename($path) {
        
        $pathInfo = pathinfo($path);
        return $pathInfo['basename'];
        
    }
	
}
	