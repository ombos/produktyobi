angular.module('rds', ['ngSanitize']).
config(function($httpProvider) {
    
    $httpProvider.defaults.headers.common = {"RdsRequest": true};
    
}).
provider('RdsGlobal', function() {
	
	this.webroot;
	this.upload = {
		path: null,
		image: {
			thumbnail: {
				prefix: null
			}
		},
		kcfinder: {
			openImage: null,
			path: null
		}
	};
	
	this.$get = function() {
		var instance = {
			webroot: this.webroot,
			upload: this.upload
		};
		
		return instance;
	};
	
}).
/**
 * Rds Flash Service
 * 
 * Registers and notifies listeners about flash changes
 * 
 * function addListener - registers listener for flash change with given key
 * @param string key - key of flash to register to
 * @param function handler - function that will be called with parameters:
 *   string|object message
 *   object params
 * @return void
 * 
 * function set - set values of flash with given key, calls listeners registered for given key
 * @param string|object message
 * @param object params
 * @param string key - key of flash to set
 * @return void
 */
provider('RdsFlash', function() {
	
	this.$get = function() {
		var listeners = {};
		var instance = {
			addListener: function(key, handler) {
				if (angular.isUndefined(listeners[key])) listeners[key] = [];
				listeners[key].push(handler);
			},
			set: function(message, params, key) {
				if (!params) params = {};
				if (!key) key = 'flash';
				if (angular.isDefined(listeners[key])) {
					listeners[key].forEach(function(handler) {
						handler(message, params);
					});
				}
			}
		};
		
		return instance;
	};
	
}).
factory('RdsUtil', function(RdsGlobal) {
	
	return {
		fixUrl: function(url) {
			if (RdsGlobal.webroot) {
				if (url.substring(0, 1) == '/') url = url.substring(1);
				url = RdsGlobal.webroot + url;
			} else {
				if (url.substring(0, 1) != '/') url = '/' + url;
			}
			return url;
		},
		redirect: function(url) {
			if (RdsGlobal.webroot) {
				if (url.indexOf(RdsGlobal.webroot) != 0) {
					url = RdsGlobal.webroot + (url.substr(0, 1) == '/' ? url.substr(1) : url);
					
				}
			}
			window.location.href = url;
		}
	};
	
}).
/**
 * Rds Queue Service
 * 
 * Creates new queue
 * 
 * function add - adds new item do the queue, possible item members:
 *  - item
 *  - onLoadStart
 *  - onLoadEnd
 * 
 * function start - runs the queue
 * function clear - resets the queue
 * function length - returns current item count in queue
 * function items - return current items
 * function setLoadingCompleteCallback - self explanatory :)
 * 
 */
factory('RdsQueue', function() {
    
    return function() {
        
        var data = [];
        var currentItemObject = null;
        var loadingCompleteCallback;
        
        function _loadNext() {
            currentItemObject = data.shift();
            if (currentItemObject) {
                if (angular.isDefined(currentItemObject.onLoadStart)) {
                    currentItemObject.onLoadStart(currentItemObject.item, _afterLoad);
                } else {
                    _afterLoad();
                }
            } else {
                (loadingCompleteCallback || angular.noop)();
            }
        }
        
        function _afterLoad() {
            if (angular.isDefined(currentItemObject.onLoadEnd)) {
                currentItemObject.onLoadEnd(currentItemObject.item, _loadNext);
            } else {
                _loadNext();
            }
        }
        
        return {
            add: function(itemObject) {
                data.push(itemObject);
            },
            start: function() {
                _loadNext();
            },
            clear: function() {
                data = [];
            },
            length: function() {
                return data.length;
            },
            items: function() {
                return data;
            },
            setLoadingCompleteCallback: function(callback) {
                loadingCompleteCallback = callback;
            }
        };
        
    };
    
}).
/**
 * Rds Alert
 */
directive('rdsAlert', function() {
	
	var __types = {
		info: 'alert-info',
		success: 'alert-success',
		warning: 'alert-warning',
		danger: 'alert-danger'
	};
	
	return {
		scope: {
			data: '=rdsAlert',
			type: '=rdsAlertType'
		},
		link: function(scope, element, attrs) {
			scope.$watch('data', function(value) {
				if (value) scope.open = true;
			});
			
			scope.$watch('type', function(value) {
				scope.class = value && angular.isDefined(__types[value]) ? __types[value] : 'alert-info';
			});
		},
		template: 
			'<div class="alert alert-dismissible" ng-class="class" ng-show="data && open">' +
				'<a class="close" ng-click="open = false">&times;</a>' +
				'<span ng-bind-html="data | rdsObjectToHtmlList"></span>' +
			'</div>'
	};
	
}).
directive('rdsConfirm', function() {
	
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).click(function() {
				if (confirm(angular.fromJson('"' + attrs.rdsConfirm + '"'))) {
					try {
						eval(attrs.rdsConfirmAction);
					} catch (e) {}
				}
				else return false;
			});
		}
	};
	
}).
/**
 * Rds Flash Directive
 * 
 * Directive to work with Rds Session Helper, Rds Flash Element and Rds Flash Service
 * Starting values are set through attributes
 * Directive registers at Rds Flash Service with flash key given in rdsFlashKey attribute and makes changes internally through scope variables
 * 
 * Attributes:
 * rdsFlashKey
 * rdsFlashType
 * rdsFlashMessage
 */
directive('rdsFlash', function($rootScope, RdsFlash) {
	
	return {
		scope: {
			key: '@rdsFlashKey',
			message: '@rdsFlashMessage',
			type: '@rdsFlashType'
		},
		link: function(scope, element, attrs) {
			$rootScope.Flash = RdsFlash;
			
			RdsFlash.addListener(scope.key, function(message, params) {
				scope.message = message;
				scope.type = params.type;
			});
		},
		template: '<div rds-alert="message" rds-alert-type="type"></div>'
	};
	
}).
directive('rdsForm', function($http, $parse, $timeout) {
	/**
	 * ajax [boolean]
	 * validationUrl [string]
	 */
	
	var _dataType;
	
	function _createFileDummy() {
		return {
			name: '',
			type: '',
			tmp_name: '',
			error: 4,
			size: 0
		};
	}
	
	function _createAjaxData(form) {
		var data = _dataType == 'json' ? {} : new FormData();
		_appendAjaxData(data, 'data', {
			_Token: {
				key: form.find('[name="data[_Token][key]"]').val(),
				fields: form.find('[name="data[_Token][fields]"]').val(),
				unlocked: form.find('[name="data[_Token][unlocked]"]').val()
			}
		});
		return data;
	}
	
	function _appendAjaxData(data, name, value) {
		if (_dataType == 'json') {
			var parts = name.match(/[^\[\]]+/g);
			name = parts.shift();
			
			if (parts.length != 0) {
				var newValue = {};
				var child = newValue;
				parts.forEach(function(field, i) {
					if (i == parts.length - 1) child[field] = value;
					else {
						child[field] = {};
						child = child[field];
					}
				});
				value = newValue;
			}
			
			if (angular.isUndefined(data[name])) data[name] = {};
		}
		
		if (angular.isObject(value) && !(value instanceof File) && (!angular.isArray(value) || value.length != 0)) {
			for (var field in value) {
				if (_dataType == 'json') _appendAjaxData(data[name], field, value[field]);
				else _appendAjaxData(data, name + '[' + field + ']', value[field]);
			}
		} else {
			if (_dataType == 'json') data[name] = value;
			else data.append(name, value);
		}
	}
	
	function _findInputControl(input) {
		var control = $(input.element).find('input, textarea, select');
		return control.length != 0 ? control : null;
	}
	
	function _validate(form, input, inputs, url) {
		_setInputValidationElements(input, null, true);
		
		var data = _createAjaxData(form);
        for (var i in inputs) {
            var dataObject;
            if (angular.isDefined(inputs[i].scope.getDataObject)) dataObject = inputs[i].scope.getDataObject();
            else {
                var control = _findInputControl(inputs[i]);
                if (control) dataObject = {
                    name: control.attr('name'),
                    value: control.val()
                };
            }
            if (dataObject && dataObject.name) {
                _appendAjaxData(data, dataObject.name.replace(/data/, 'data[data]'), dataObject.value);
                if (inputs[i] == input) _appendAjaxData(data, dataObject.name.replace(/data/, 'data[field]'), dataObject.value);
            }
        }
		
		var options = {
			url: url,
			method: 'POST',
			data: data
		};
		if (_dataType == 'formData') {
			options.transformRequest = angular.identity;
			options.headers = {"Content-Type": undefined};
		}
		
		$http(options).
		success(function(response) {
			if (response.data != true) _processInputValid(input, response.data);
			else _setInputValidationElements(input);
		});
	}
	
	function _processInputValid(input, errors) {
		var name;
		if (angular.isDefined(input.scope.name)) name = input.scope.name;
		else if (angular.isDefined(input.scope.getDataObject)) {
		    name = input.scope.getDataObject().name;
		}
		else {
			var control = _findInputControl(input);
			if (control) name = control.attr('name');
		}
		
		var message;
		if (name) {
			message = _getValidationErrorMessage(errors, name, 'data');
			_setInputValidationElements(input, message);
		}
		
		return message ? false : true;
	}
	
	function _getValidationErrorMessage(source, searchedName, string) {
		for (var field in source) {
			var newString = string + '[' + field + ']';
			if (newString == searchedName) return _resolveValidationErrorMessage(source[field]);
			else if (typeof source[field] == 'object') {
				var message = _getValidationErrorMessage(source[field], searchedName, newString);
				if (message) return message;
			}
		}
		return null;
	}
	
	function _resolveValidationErrorMessage(value) {
		if (typeof value != 'object') return value;
		else for (var i in value) return _resolveValidationErrorMessage(value[i]);
		return null;
	}
	
	function _setInputValidationElements(input, message, reset) {
		if (angular.isUndefined(input.scope.validate) || input.scope.validate == true) {
			if (reset) {
				input.element.removeClass('error').removeClass('has-error').removeClass('has-success');
				input.element.find('div.error-message').remove();
			} else {
				if (message) {
					input.element.addClass('error').addClass('has-error');
					input.element.append('<div class="error-message">' + message + '</div>');
				} else {
					input.element.addClass('has-success');
				}
			}
		}
	}
	
	function _submit(scope, form, inputs, success, error, fault) {
		inputs.forEach(function(input) {
			_setInputValidationElements(input, null, true);
		});
		
		var data = _createAjaxData(form);
		for (var i in inputs) {
			var input = inputs[i];
			var dataObject;
			if (angular.isDefined(input.scope.getDataObject)) dataObject = input.scope.getDataObject();
			else {
				var control = _findInputControl(input);
				if (control) dataObject = {
					name: control.attr('name'),
					value: control.val()
				};
			}
			if (dataObject) _appendAjaxData(data, dataObject.name, dataObject.value);
		}
		
		var options = {
			url: form.attr('action'),
			method: 'POST',
			data: data
		};
		if (_dataType == 'formData') {
			options.transformRequest = angular.identity;
			options.headers = {"Content-Type": undefined};
		}
		
		$http(options).
		success(function(response) {
			if (angular.isObject(response)) {
				if (response.errors) {
					inputs.forEach(function(input) {
						_processInputValid(input, response.errors);
					});
					
					if (error) scope.$eval(error, {response:response});
				} else {
					inputs.forEach(function(input) {
						_setInputValidationElements(input);
					});
					
					if (success) scope.$eval(success, {response:response});
				}
			} else {
				if (fault) scope.$eval(fault);
			}
		}).
		error(function() {
			if (fault) scope.$eval(fault);
		});
	}
	
	return {
		controller: function($scope, $element, $attrs) {
			var form = $($element);
			var params = angular.fromJson($attrs.rdsForm);
			var validate = angular.isDefined(params.validationUrl) ? _validate : null;
			var ajax = params.ajax == true;
			var dataType = params.dataType == 'json' ? 'json' : 'formData';
			var registeredInputs = [];
			
			$scope[params.submitCall] = function() {
				submit();
			};
			
			$scope[params.reset] = function() {
			    angular.forEach(registeredInputs, function(input) {
                    _setInputValidationElements(input, null, true);
                    if (angular.isDefined(input.scope.reset)) input.scope.reset();
                    else {
                        var control = _findInputControl(input);
                        if (control) {
                            if (control.prop('tagName') == 'select') {
                                control.prop('selectedIndex', 0);    
                            } else {
                                control.val('');                                
                            }
                        }
                    }
			    });
			};
			
			form.on('submit', function(e) {
			    submit(e);
			});
			
			function submit(e) {
				var proceed;
                if (params.submit) {
                    proceed = $scope.$eval(params.submit);
                }
                if (proceed != false) {
                    if (ajax) {
                        if (e) e.preventDefault();
                        _dataType = dataType;
                        _submit($scope, form, registeredInputs, params.success, params.error, params.fault);
                    }
                } else {
                    if (e) e.preventDefault();
                }
			}
			
			this.createAjaxData = _createAjaxData;
			this.appendAjaxData = _appendAjaxData;
			this.createFileDummy = _createFileDummy;
			this.registerInput = function(element, scope) {
				var input = {
					element: $(element),
					scope: scope
				};
				
				var disabled = false;
				if (angular.isDefined(scope.disabled) && scope.disabled()) disabled = true;
				else {
					var control = _findInputControl(input);
					if (control) disabled = !!$(control).prop('disabled');
				}
				
				if (!disabled) {
					registeredInputs.push(input);
					
					if (validate) {
						scope.$on('blur', function(e) {
							_dataType = dataType;
							validate(form, input, registeredInputs, params.validationUrl);
						});
					}
				}
			};
            this.unregisterInput = function(inputName) {
                angular.forEach(registeredInputs, function(input, index) {
                    if (input.element.find('input').attr('name') == inputName) {
                        registeredInputs.splice(index, 1);
                    }
                });
            };
            
            if (params.unregisterInput) {
                $scope[params.unregisterInput] = this.unregisterInput;   
            }
		}
	};
	
}).
directive('rdsInputCheckbox', function() {
    
    return {
        require: '?^rdsForm',
        scope: {},
        link: function(scope, element, attrs, formController) {
        	var control = $(element).find('input[type=checkbox]');
            scope.getDataObject = function() {
                return {
                    name: control.attr('name'),
                    value: control.is(':checked') ? (control.val() ? control.val() : 1) : 0
                };
            };
            scope.reset = function() {};
            
            var value = $(element).find('input[type=checkbox]').attr('input-value');
            if (value != undefined) {
            	scope.$parent.$watch(value, function(newValue) {
            		if (angular.isDefined(newValue)) {
						$(element).find('input[type=checkbox]').each(function() {
							$(this).attr('checked', newValue ? 'checked' : null);
						});
            		}
            	});
            }
            
            if (formController) {
                formController.registerInput(element, scope);   
            }
        }
    };
    
}).
directive('rdsInputDate', function($compile, $interpolate, $document, $filter) {
	
	var _monthNames = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
	
	return {
		require: '?^rdsForm',
		scope: true,
		link: function(scope, element, attrs, formController) {
			var params = angular.fromJson(attrs.rdsInputDate);
			var input = $(element);
			var picker = input.find('.picker');
			var control = input.find('input');
			var initialDate = input.find('input[type=hidden]').val() != '' ? valueToDate($interpolate(input.find('input[type=hidden]').val())(scope)) : null;
			var pickerDate = new Date();
			var currentDate;
			
			if (!initialDate && !params.nullDate) {
			    initialDate = new Date();
			}
			
			scope.reset = function() {
			    currentDate = initialDate;
                if (currentDate) {
                    control.val(dateToValue(currentDate));
                    scope.displayValue = currentDate.toLocaleDateString();
                    if (angular.isDefined(params.databaseValue)) {
                        scope.$parent[params.databaseValue] = $filter('date')(currentDate, 'yyyy-MM-dd');
                    }
                } else {
                    control.val('');
                    scope.displayValue = '';
                    if (angular.isDefined(params.databaseValue)) {
                        scope.$parent[params.databaseValue] = null;
                    }
                }
			};
            
            if (angular.isDefined(params.resetFunction)) {
                scope.$parent[params.resetFunction] = scope.reset;
            }
            
            scope.reset();
            
			scope.toggle = function(e) {
				e.preventDefault();
				
				if (picker.css('display') == 'none') {
                    var now = currentDate ? currentDate : new Date();
                    pickerDate.setFullYear(now.getFullYear());
                    pickerDate.setMonth(now.getMonth());
                    pickerDate.setDate(now.getDate());
					updatePicker();
					$document.on('click', tryToHidePicker);
				}
				
				picker.toggle();
			};
			scope.changeMonth = function(e, next) {
				e.preventDefault();
				
				pickerDate.setMonth(pickerDate.getMonth() + (next ? 1 : -1));
				updatePicker();
			};
			scope.pick = function(e, time) {
				e.preventDefault();
				nowDate = new Date();
				pickedDate = new Date(time);
				
				if (pickedDate < nowDate) {
					displayDate = nowDate;
				} else {
					displayDate = pickedDate;
				}
				
					control.val(dateToValue(displayDate));
					scope.displayValue = displayDate.toLocaleDateString();
					if (angular.isDefined(params.databaseValue)) {
						scope.$parent[params.databaseValue] = $filter('date')(displayDate, 'yyyy-MM-dd');
					}
				tryToHidePicker(null, true);
			};
            scope.getDataObject = function() {
                return {
                    name: $(element).find('input[type=hidden]').attr('name'),
                    value: $(element).find('input[type=hidden]').val()
                };
            };
            
            if (formController) {
                formController.registerInput(element, scope);
            }
			
			function valueToDate(value) {
			    if (value) {
                    var parts = value.split('-');
                    return new Date(parts[0], parseInt(parts[1]) - 1, parts[2]);
			    } else return null;
			}
			
			function dateToValue(date) {
				var month = (date.getMonth() + 1).toString();
				if (month.length == 1) month = '0' + month;
				var day = date.getDate().toString();
				if (day.length == 1) day = '0' + day;
				return date.getFullYear() + '-' + month + '-' + day;
			}
			
			function updatePicker() {
				scope.month = _monthNames[pickerDate.getMonth()];
				scope.year = pickerDate.getFullYear();
				createDays();
			}
			
			function createDays() {
				picker.find('.days tbody').empty();
				
				var date = new Date();
				date.setFullYear(pickerDate.getFullYear());
				date.setMonth(pickerDate.getMonth());
				date.setDate(1);
				
				var day = date.getDay();
				if (day == 0) day = 7;
				day = 2 - day;
				
				for (var i=0; i<6; ++i) {
					var week = $('<tr></tr>');
					picker.find('.days tbody').append(week);
					
					for (var j=0; j<7; ++j) {
						date = new Date();
						date.setFullYear(pickerDate.getFullYear());
						date.setMonth(pickerDate.getMonth());
						date.setDate(day);
						
						var node = $('<td ng-click="pick($event, ' + date.getTime() + ')"><div>' + date.getDate() + '</div></td>');
						if (date.getMonth() == pickerDate.getMonth()) node.addClass('current');
						if (currentDate 
						    && date.getDate() == currentDate.getDate()
							&& date.getMonth() == currentDate.getMonth()
							&& date.getFullYear() == currentDate.getFullYear()) node.addClass('active').addClass('text-primary');
						week.append(node);
						day ++;
					}
				}
				
				$compile(picker.find('.days'))(scope);
			}
			
			function tryToHidePicker(e, force) {
				if (force || !$(e.target).parents().is(input)) {
					picker.hide();
					$document.off('click', tryToHidePicker);
                    scope.$broadcast('blur');
				}
			}
		},
		template: function(element) {
			return $(element).html();
		}
	};
	
}).
directive('rdsInputEmail', function() {
    
    return {
        require: '^rdsForm',
        scope: {},
        link: function(scope, element, attrs, formController) {
            $(element).find('input').on('blur', function() {
                scope.$broadcast('blur');
            });
            
            formController.registerInput(element, scope);
        }
    };
    
}).
directive('rdsInputFile', function() {
	
	return {
		require: '^rdsForm',
		scope: {},
		link: function(scope, element, attrs, formController) {
			var file = formController.createFileDummy();
			
			$(element).find('input').on('change', function() {
				file = this.files[0];
			});
			
			scope.getDataObject = function() {
				return {
					name: $(element).find('input').attr('name'),
					value: file
				};
			};
			
			formController.registerInput(element, scope);
		}
	};
	
}).
directive('rdsInputFloat', function(rdsFloatFilter, rdsPercentFilter) {
	/**
	 * param [object]
	 *   format [string]: 'float', 'percent' - default 'float'
	 *   decimalCount [integer]
	 *   decimalSeparator [string]
	 */
	
	function formatValue(control, params) {
		if (params.format == 'float') control.val(rdsFloatFilter(control.val(), params.decimalCount, params.decimalSeparator));
		else if (params.format == 'percent') control.val(rdsPercentFilter(control.val(), params.decimalCount));
	}
	
	return {
		require: '^rdsForm',
		scope: {},
		link: function(scope, element, attrs, formController) {
			var control = $(element).find('input');
			var params = angular.fromJson(attrs.rdsInputFloat);
			if (angular.isUndefined(params.format)) params.format = 'float';
			
			formatValue(control, params);
			
			control.on('blur', function() {
				formatValue(control, params);
				scope.$broadcast('blur');
			});
			
			formController.registerInput(element, scope);
		}
	};
	
}).
directive('rdsInputHidden', function() {
    
    return {
        require: '?^rdsForm',
        scope: {},
        link: function(scope, element, attrs, formController) {
            scope.getDataObject = function() {
                return {
                    name: $(element).attr('name'),
                    value: $(element).val()
                };
            };
            scope.reset = function() {};
			
			if (formController) {
                formController.registerInput(element, scope);   
            }
        }
    };
    
}).
directive('rdsInputInteger', function(rdsIntegerFilter) {
	/**
	 * param [object]
	 *   natural [boolean]: default false
	 *   allowZero [boolean]: default true
	 */
	
	function formatValue(control, params) {
		control.val(rdsIntegerFilter(control.val(), params.natural, params.allowZero));
	}
	
	return {
		require: '^rdsForm',
		scope: {},
		link: function(scope, element, attrs, formController) {
			var control = $(element).find('input');
			var params = angular.fromJson(attrs.rdsInputInteger);
			
			formatValue(control, params);
			
			control.on('blur', function() {
				formatValue(control, params);
				scope.$broadcast('blur');
			});
			
			formController.registerInput(element, scope);
		}
	};
	
}).
directive('rdsInputTel', function() {
    
    return {
        require: '^rdsForm',
        scope: {},
        link: function(scope, element, attrs, formController) {
            $(element).find('input').on('blur', function() {
                scope.$broadcast('blur');
            });
            
            formController.registerInput(element, scope);
        }
    };
    
}).
directive('rdsInputPassword', function() {
	
	return {
		require: '^rdsForm',
		scope: {},
		link: function(scope, element, attrs, formController) {
			$(element).find('input').on('blur', function() {
				scope.$broadcast('blur');
			});
			
			formController.registerInput(element, scope);
		}
	};
	
}).
directive('rdsInputRadio', function() {
    
    return {
        require: '^rdsForm',
        scope: {},
        link: function(scope, element, attrs, formController) {
            scope.getDataObject = function() {
            	var control = $(element).find('input[type=radio]:checked');
				if (control.length == 0) {
					control = $(element).find('input[type=hidden]');
				}
                return {
                    name: control.attr('name'),
                    value: control.val()
                };
            };
            scope.reset = function() {};
            
            var value = $(element).find('input[type=radio]').attr('input-value');
            if (value != undefined) {
            	scope.$parent.$watch(value, function(newValue) {
            		if (angular.isDefined(newValue)) {
            			$(element).find('input[type=hidden]').each(function() {
							$(this).val(newValue);
						});
						
						$(element).find('input[type=radio]').each(function() {
							if ($(this).val() == newValue)
							{
								$(this).attr('checked', 'checked');
							}
						});
            		}
            	});
            }
            
            formController.registerInput(element, scope);
        }
    };
    
}).
directive('rdsInputSelect', function() {
	
	return {
		require: '?^rdsForm',
		scope: {},
		link: function(scope, element, attrs, formController) {
			if (angular.isDefined(formController)) {
				if ($(element).find('input[type=checkbox]').length == 0) {
					$(element).find('select').on('blur', function() {
						scope.$broadcast('blur');
					});
				} else {
					scope.getDataObject = function() {
						var data = [];
						
						$(element).find('input[type=checkbox]:checked').each(function() {
							data.push($(this).val());
						});
						
						return {
							name: $(element).find('input[type=hidden]').attr('name'),
							value: data
						};
					};
				}

				formController.registerInput(element, scope);
			}
		}
	};
	
}).
directive('rdsInputSingleImage', function(RdsGlobal) {
	
	var _kcfinderUploadPath = RdsGlobal.webroot + 'app/webroot/' + RdsGlobal.upload.kcfinder.path + 'images/';
	var _kcfinderThumbsUploadPath = RdsGlobal.webroot + RdsGlobal.upload.kcfinder.path + '.thumbs/images/';
	var _uploadPath = RdsGlobal.webroot + RdsGlobal.upload.path + 'images/';
	
	function _setKcfinderImage(container, path) {
		var path = path.replace(_kcfinderUploadPath, '');
		_setImage(container, _kcfinderThumbsUploadPath + path);
	}
	
	function _setUploadImage(container, path) {
		_setImage(container, _uploadPath + RdsGlobal.upload.image.thumbnail.prefix + path);
	}
	
	function _setImage(container, path) {
		container.html('<img src="' + path + '">');
	}
	
	return {
		require: '^rdsForm',
		scope: {},
		link: function(scope, element, attrs, formController) {
			var params = angular.fromJson(attrs.rdsInputSingleImage);
			var input = $(element);
			var imageContainer = input.find('.image');
			var pathControl = input.find('input').first();
			var processControl = input.find('input').last();
			
			if (pathControl.val()) {
				if (processControl.val() == 1) _setKcfinderImage(imageContainer, pathControl.val());
				else _setUploadImage(imageContainer, pathControl.val());
				input.addClass('filled');
			}
			
			scope.browseLabel = angular.isDefined(params.browseLabel) ? params.browseLabel : 'wybierz';
			scope.deleteLabel = angular.isDefined(params.deleteLabel) ? params.deleteLabel : 'usuń';
			scope.browse = function(e) {
				e.preventDefault();
				
				if (RdsGlobal.upload.kcfinder.openImage) {
					window.KCFinder = {
						callBack: function(url) {
							window.KCFinder = null;
							
							pathControl.val(url);
							processControl.val(1);
							
							_setKcfinderImage(imageContainer, url);
							input.addClass('filled');
						}
					};
					RdsGlobal.upload.kcfinder.openImage();
				} else throw 'RdsGlobal.upload.kcfinder.openImage is not defined!';
			};
			scope['delete'] = function(e) {
				e.preventDefault();
				
				pathControl.val('');
				processControl.val(1);
				
				imageContainer.empty();
				input.removeClass('filled');
				
				scope.$emit('deleteSingleImage', input);
			};
			scope.reset = function() {
			    throw 'Reset function for rdsSingleImage is not defined!';
			};
			
			formController.registerInput(element, scope);
		},
		template: function(element) {
			return $(element).html();
		}
	};
	
}).
directive('rdsInputText', function() {
    
    return {
        require: '?^rdsForm',
        scope: {},
        link: function(scope, element, attrs, formController) {
            $(element).find('input').on('blur', function() {
                scope.$broadcast('blur');
            });
            
            if (formController) {
                formController.registerInput(element, scope);   
            }
        }
    };
    
}).
directive('rdsInputTextarea', function() {
    
    return {
        require: '^rdsForm',
        scope: {},
        link: function(scope, element, attrs, formController) {
            $(element).find('textarea').on('blur', function() {
                scope.$broadcast('blur');
            });
            
            formController.registerInput(element, scope);
        }
    };
    
}).
directive('rdsInputXFile', function(RdsQueue, RdsUtil, $timeout, $http) {
    /**
     * param [object]
     *   maxFiles [integer]: default 10
     *   allowedExtensions [array]: default undefined
     *   fileListUrl [string]: default undefined
     *   buttonLabel [string]: default 'Drag&Drop files here'
     */
    
    var imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    var iconsPath = 'plugin/rds/img/file_icons/';
    
    return {
        require: '^rdsForm',
        scope: {
            reset: '=?rdsInputXFileReset'
        },
        link: function(scope, element, attrs, formController) {
            var params = angular.fromJson(attrs.rdsInputXFile);
            var maxFiles = angular.isDefined(params.maxFiles) ? params.maxFiles : 10;
            var allowedExtensions = angular.isDefined(params.allowedExtensions) ? params.allowedExtensions : undefined;
            var fileListUrl = angular.isDefined(params.fileListUrl) ? params.fileListUrl : undefined;
            var dropZone = $(element).find('[rds-input-x-file-drop-zone]');
            var inputFile = $(element).find('input[type=file]');
            var newFiles = [];
            var unchangedFiles = [];
            var filesToRemove = [];
            var queue = RdsQueue();
            var serverQueue = RdsQueue();
            
            serverQueue.setLoadingCompleteCallback(onFinishedServerQueue);
            
            if (angular.isDefined(fileListUrl)) {
                $http({
                    url: fileListUrl
                }).
                success(function(response) {
                    if (angular.isObject(response)) {
                        angular.forEach(response.data, function(fileObject) {
                            if (angular.isUndefined(fileObject.path) || angular.isUndefined(fileObject.name)) {
                                throw 'rdsInputXFile - fileObject requires path and name properties';
                                return;
                            }
                            var preview;
                            serverQueue.add({
                                item: fileObject,
                                onLoadStart: function(item, onLoadingEnd) {
                                    if (imageExtensions.indexOf(getFileExtension(item)) !== -1) {
                                        fileObject.type = 'image';
                                    } else {
                                        fileObject.type = 'icon';
                                    }
                                    unchangedFiles.push(item.name);
                                    preview = generatePreviewForEdit(fileObject);
                                    scope.previews.push(preview);
                                    $http({
                                        url: RdsUtil.fixUrl(item.path),
                                        method: 'HEAD'
                                    }).
                                    success(function(response, status, getHeader) {
                                        preview.size = getHeader('Content-Length');
                                        onLoadingEnd();
                                    });
                                },
                                onLoadEnd: function(item, onLoadingEnd) {
                                    onLoadingEnd();
                                },
                            });
                        });
                        serverQueue.start();
                    }
                }).
                error(function() {
                });
            }
            
            scope.showCaption = true;
            scope.buttonLabel = angular.isDefined(params.buttonLabel) ? params.buttonLabel : 'Drag&Drop files here';
            scope.dragOver = false;
            scope.previews = [];
            queue.setLoadingCompleteCallback(onFinishedLoading);
            
            scope.getDataObject = function() {
                return {
                    name: $(element).find('input').attr('name'),
                    value: {
                        add: newFiles,
                        remove: filesToRemove,
                        skip: unchangedFiles
                    }
                };
            };
            
            scope.reset = function() {
                newFiles = [];
                filesToRemove = [];
                queue = RdsQueue();
                queue.setLoadingCompleteCallback(onFinishedLoading);
                scope.dragOver = false;
                scope.previews = [];
            };
            
            scope.remove = function(e, preview) {
                e.stopPropagation();
                if (preview.previewType == 'newFile') {
                    newFiles.splice(newFiles.indexOf(preview.file), 1);
                }
                if (preview.previewType == 'oldFile') {
                    filesToRemove.push(preview.name);
                    unchangedFiles.splice(unchangedFiles.indexOf(preview.name), 1);
                }
                scope.previews.splice(scope.previews.indexOf(preview), 1);
                updateCaption();
            };
            
            formController.registerInput(element, scope);
            
            inputFile.on('change', onChange);
            dropZone.on('click', onClick);
            dropZone.on('dragenter', onDragEnter);
            dropZone.on('dragover', onDragOver);
            dropZone.on('dragleave', onDragLeave);
            dropZone.on('drop', onDrop);
            
            function onClick(e) {
               var inputFileEl = inputFile[0];
               if(inputFileEl && document.createEvent) {
                  var evt = document.createEvent("MouseEvents");
                  evt.initEvent("click", true, false);
                  inputFileEl.dispatchEvent(evt);
               }
            }
            
            function onChange(e) {
                if (e.currentTarget.files[0]) {
                    addFile(e.currentTarget.files[0]);
                }
                queue.start();
            }
            
            function stopEvent(e) {
                e.stopPropagation();
                e.preventDefault();
            }
            
            function onDragEnter(e) {
                stopEvent(e);
                scope.$apply(function() {
                    scope.dragOver = true;
                });
            }
            
            function onDragOver(e) {
                stopEvent(e);
                scope.$apply(function() {
                    scope.dragOver = true;
                });
            }
            
            function onDragLeave(e) {
                stopEvent(e);
                scope.$apply(function() {
                    scope.dragOver = false;
                });
            }
            
            function onDrop(e) {
                stopEvent(e);
                scope.$apply(function() {
                    scope.dragOver = false;
                    if (e.originalEvent.dataTransfer.files.length > 0) {
                        angular.forEach(e.originalEvent.dataTransfer.files, function(file) {
                            addFile(file);
                        });
                        queue.start();
                    }
                });
            }
            
            function addFile(file) {
                if (scope.previews.length < maxFiles) {
                    if (angular.isUndefined(allowedExtensions) || allowedExtensions.indexOf(getFileExtension(file)) !== -1) {
                        var preview = generatePreview(file);
                        scope.previews.push(preview);
                        newFiles.push(file);
                        updateCaption();
                        queue.add({
                            item: file,
                            onLoadStart: function(item, onLoadingEnd) {
                                if (imageExtensions.indexOf(getFileExtension(item)) !== -1) {
                                    var fileReader = new FileReader();
                                    fileReader.onprogress = function(e) {
                                        scope.$apply(function() {
                                            if (e.lengthComputable) {
                                                preview.progress = parseInt(((e.loaded / e.total) * 100), 10);
                                            }
                                        });
                                    };
                                    fileReader.onloadend = function(e) {
                                        scope.$apply(function() {
                                            preview.type = 'image';
                                            preview.imageData = e.target.result;
                                            preview.progress = 100;
                                            onLoadingEnd();
                                        });
                                    };
                                    fileReader.readAsDataURL(item);
                                } else {
                                    preview.type = 'icon';
                                    preview.iconSrc = RdsUtil.fixUrl(iconsPath + getIconForFile(file));
                                    onLoadingEnd();
                                }
                            },
                            onLoadEnd: function(item, onLoadingEnd) {
                                onLoadingEnd();
                                updateCaption();
                            },
                        });
                    }
                }
            }
            
            function generatePreview(file) {
                var preview = {
                    previewType: 'newFile',
                    name: file.name,
                    size: file.size,
                    progress: 0,
                    file: file
                };
                
                if (imageExtensions.indexOf(getFileExtension(file)) !== -1) preview.progress = 0.01;
                return preview;
            }
            
            function generatePreviewForEdit(fileObject) {
                var preview = {
                    previewType: 'oldFile',
                    name: fileObject.name,
                    type: fileObject.type,
                    progress: 0,
                    fileObject: fileObject
                };
                if (fileObject.type == 'image') {
                    preview.imageData = RdsUtil.fixUrl(fileObject.path);
                } else if(fileObject.type == 'icon') {
                    preview.iconSrc = RdsUtil.fixUrl(iconsPath + getIconForFile(fileObject));
                }
                return preview;
            }
            
            function onFinishedLoading() {
                $timeout(function() {
                    angular.forEach(scope.previews, function(preview, key) {
                        preview.progress = 0;
                    });
                }, 1000);
            }
            
            function onFinishedServerQueue() {
                updateCaption();
            }
            
            function updateCaption() {
                scope.showCaption = maxFiles > newFiles.length + unchangedFiles.length;
            }
            
            function getIconForFile(file) {
                return getFileExtension(file) + '.png';
            }
            
            function getFileExtension(file) {
                var extension = file.name.split('.').pop();
                return extension.toLowerCase();
            }
            
        },
        template: function(element) {
            return $(element).html();
        }
    };
    
}).
directive('rdsList', function($rootScope, $http, $q, $location, $timeout, RdsUtil) {
	
	return {
		scope: {
			url: '@rdsListUrl',
			updateUrl: '@rdsListUpdateUrl',
			initFilter: '@rdsListInitFilter',
			call: '=?rdsListFilterCall',
			items: '=rdsListItems',
			onSubmit: '&rdsListSubmit',
			onSuccess: '&rdsListSuccess',
			onError: '&rdsListError',
			onFault: '&rdsListFault'
		},
		controller: function($scope, $element, $attrs) {
			var $locationUrl = $location.url();
			var $ignoreNextLocationUrlChange = false;
			var $deferredAbort;
			var $data = angular.copy($location.search());
			var filters = {};
			var numInitFilters = $($element).find('[rds-list-filter]').length;
			var numInitRegisteredFilters = 0;
			
			if (numInitFilters == 0) init();
			
			if (angular.isUndefined($scope.updateUrl) || $scope.updateUrl != 'false') {
				$rootScope.$on('$locationChangeSuccess', function() {
					if ($location.url() != $locationUrl) {
						$locationUrl = $location.url();
						
						if (!$ignoreNextLocationUrlChange) {
							$data = angular.copy($location.search());
							
							for (var name in filters) {
								filters[name].forEach(function(filter) {
									filter.value = $data[name];
								});
							}
							
							getList($data, false);
						}
					}
					$ignoreNextLocationUrlChange = false;
			    });
			}
			
			this.registerFilter = function(scope) {
				if (angular.isDefined($data[scope.name])) scope.value = $data[scope.name];
				$data[scope.name] = scope.value;
				
				if (angular.isDefined(filters[scope.name])) filters[scope.name].push(scope);
				else filters[scope.name] = [scope];
				
				numInitRegisteredFilters ++;
				if (numInitRegisteredFilters == numInitFilters) init();
			};
			
			this.filter = function(invoker, value) {
				var data = getData();
				if (invoker && angular.isDefined(value)) data[invoker.name] = value;
				if (checkData(data, invoker)) getList(data);
			};
			
			var filterFunction = this.filter;
			$scope.call = function() {
				$timeout(filterFunction);
			};
			
			function init() {
				if (angular.isUndefined($scope.initFilter) || $scope.initFilter != 'false') {
					var data = getData();
					if (checkData(data)) getList(data, false);
				}
			}
			
			function getData() {
				var data = {};
				for (var name in filters) {
					filters[name].forEach(function(filter) {
						if (angular.isDefined(filter.value) && filter.value != null && filter.value !== '') { data[filter.name] = filter.value; }
					});
				}
				return data;
			}
			
			function checkData(data, invoker) {
				var cancel = false;
				for (var name in filters) {
					filters[name].forEach(function(filter) {
						if ((!invoker || name != invoker.name) && angular.isDefined(filter.onFilter)) {
							var response = filter.onFilter(data);
							if (response == false) {
								cancel = true;
								return;
							}
						}
					});
				}
				return !cancel;
			}
			
			function getList(data, updateUrl) {
				if (angular.isUndefined(updateUrl)) updateUrl = angular.isUndefined($scope.updateUrl) || $scope.updateUrl != 'false';
				
				if ($deferredAbort) $deferredAbort.resolve();
				$deferredAbort = $q.defer();
				
				($scope.onSubmit || angular.noop)();
				
				$http({
					url: RdsUtil.fixUrl($scope.url),
					method: 'POST',
					data: data,
					timeout: $deferredAbort.promise
				}).
				success(function(response) {
					$deferredAbort = null;
					
					if (angular.isObject(response)) {
						if (response.data) {
							var data = response.data;
							if (angular.isDefined(data.items)) $scope.items = data.items;
							if (angular.isDefined(data.paging)) {
								var pageFilter = getFilter('page');
								if (pageFilter) pageFilter.forEach(function(filter) {
									filter.setContent(data.paging);
								});
							}
							if (updateUrl && angular.isDefined(data.url)) {
								$ignoreNextLocationUrlChange = true;
								$location.url(data.url);
							}
						}
						
						if (response.errors) ($scope.onError || angular.noop)({response:response});
						else ($scope.onSuccess || angular.noop)({response:response});
					} else ($scope.onFault || angular.noop)();
				}).error(function() {
					$deferredAbort = null;
					($scope.onFault || angular.noop)();
				});
			}
			
			function getFilter(name) {
				if (angular.isDefined(filters[name])) return filters[name];
				return null;
			}
		}
	};
	
}).
directive('rdsListFilter', function($timeout) {
	
	return {
		require: '^rdsList',
		scope: {
			name: '@rdsListFilter',
			defaultValue: '=rdsListFilter',
			value: '=?rdsListFilterValue',
			call: '=?rdsListFilterCall'
		},
		link: function(scope, element, attrs, controller) {
			if (angular.isUndefined(attrs.rdsListFilterValue)) scope.$watch('defaultValue', function(value) {
				scope.value = value;
			});
			
			scope.call = function(value) {
				$timeout(function() {
					controller.filter(scope, value);
				});
			};
			
			controller.registerFilter(scope);
		}
	};
	
}).
directive('rdsListPaging', function() {
	
	return {
		require: '^rdsList',
		scope: true,
		link: function(scope, element, attrs, listController) {
			scope.name = 'page';
			scope.onFilter = function(data) {
				data.page = scope.value = 1;
			};
			scope.setContent = function(content) {
				element.html(content);
				bindLinks(element);
			};
			
			listController.registerFilter(scope);
			
			function bindLinks(element) {
				$(element).find('a').on('click', function(e) {
					e.preventDefault();
					
					var href = $(this).attr('href');
					var match = href.match(/\/page:[0-9]+$/);
					scope.value = match ? href.substring(match.index + 6) : 1;
					scope.$broadcast('filter', scope.value);
				});
			}
		}
	};
	
}).
directive('rdsModal', function() {
	
	return {
		scope: {
			positiveLabel: '@rdsModalPositiveLabel',
			positiveAction: '&rdsModalPositiveAction',
			negativeLabel: '@rdsModalNegativeLabel',
			negativeAction: '&rdsModalNegativeAction',
			open: '=?rdsModalOpen',
			close: '=?rdsModalClose'
		},
		transclude: true,
		link: function(scope, element, attrs) {
			scope.open = function() {
				scope.isOpen = true;
			};
			
			scope.close = function() {
				scope.isOpen = false;
			};
			
			scope.onPositive = function() {
				scope.close();
				(scope.positiveAction || angular.noop)();
			};
			
			scope.onNegative = function() {
				scope.close();
				(scope.negativeAction || angular.noop)();
			};
		},
		template:
			'<div class="window-container" ng-show="isOpen">' +
				'<div class="window">' +
					'<div class="content" ng-transclude></div>' +
					'<a class="btn btn-success" ng-click="onPositive()" ng-if="positiveLabel">{{positiveLabel}}</a> ' +
					'<a class="btn btn-warning" ng-click="onNegative()" ng-if="negativeLabel">{{negativeLabel}}</a>' +
				'</div>' +
			'</div>'
	};
	
}).
directive('rdsProgressBar', function() {
    
    return {
        scope: {
            progress: '=rdsProgressBarProgress'
        },
        link: function(scope, element, attrs) {},
        template:
            '<div class="bar-container" ng-show="progress > 0">' + 
                '<div class="bar" style="width:{{progress}}%"></div>' +
            '</div>'
    };
    
}).
directive('rdsSortable', function(RdsUtil, $http, $timeout) {
    
    var counter = 0;
    
    return {
        restrict: 'A',
        scope: {
            model: '=rdsSortableModel',
            url: '@rdsSortableUrl',
            axis: '@rdsSortableAxis',
            handleExists: '=rdsSortableHandleExists',
            onSubmit: '&rdsSortableSubmit',
            onSuccess: '&rdsSortableSuccess',
            onError: '&rdsSortableError',
            onFault: '&rdsSortableFault'
        },
        controller: function($scope, $element, $attrs) {
            
            counter++;
            
            var initialized = false;
            var handleRegisted = false;
            var placeholderClass = 'sortable-' + counter + '-placeholder';
            var handleClass = 'sortable-' + counter + '-handle';
            var items = [];
            
            $scope.$watch('model', tryInit);
            
            function tryInit() {
                var handlersHandled = false;
                if ($scope.handleExists) {
                    if (handleRegisted) handlersHandled = true;
                } else {
                    handlersHandled = true;
                }
                if (!initialized && angular.isObject($scope.model) && $scope.model.length > 0 && handlersHandled) {
                    $timeout(init, 0);
                    initialized = true;
                }
            }
            
            function init() {
                
                var firstElementClass = $($element).children(':first-child').attr('class');
                
                $($element).sortable({
                    placeholder: firstElementClass + ' ' + placeholderClass,
                    axis: $scope.axis,
                    handle: '.' + handleClass,
                    start: function(event, ui) {
                        var placeholder = $($element).find('.' + placeholderClass);
                        placeholder.width(ui.item.width());
                        placeholder.height(ui.item.height());
                    },
                    stop: function(event, ui) {
                        $scope.$apply(save);
                    }
                });
                
            }
            
            function save() {
                
                $($element).children().each(function(index, el) {
                    getItemByElement($(el)).scope.order = index;
                });
                
                $timeout(function() {
                    if ($scope.url) {
                        $http({
                            url: RdsUtil.fixUrl($scope.url),
                            method: 'POST',
                            data: $scope.model
                        }).
                        success(function(response) {
                            if (angular.isObject(response)) {
                                if (response.errors) {
                                    if ($scope.onError) $scope.$eval($scope.onError, {response:response});
                                } else {
                                    if ($scope.onSuccess) $scope.$eval($scope.onSuccess, {response:response});
                                }
                            } else {
                                if ($scope.onFault) $scope.$eval($scope.onFault);
                            }
                        }).error(function() {
                            if ($scope.onFault) $scope.$eval($scope.onFault);
                        });
                    }
                });
                
            }
            
            function getItemByElement(element) {
                for (var i in items) {
                    if (items[i].element[0] == element[0]) return items[i];
                }
                return null;
            }
            
            this.registerHandle = function(handle){
                handle.addClass(handleClass);
                handleRegisted = true;
                tryInit();
            };
            
            this.registerItem = function(scope, element){
                items.push({
                    scope: scope,
                    element: $(element)
                });
            };
            
        }
    };
    
}).
directive('rdsSortableHandle', function() {
    
    return {
        restrict: 'A',
        require: '^rdsSortable',
        scope: {},
        link: function(scope, element, attrs, controller) {
            controller.registerHandle(element);
        }
    };
    
}).
directive('rdsSortableItem', function() {
    
    return {
        restrict: 'A',
        require: '^rdsSortable',
        scope: {
            order: '=rdsSortableItemOrder'
        },
        link: function(scope, element, attrs, controller) {
            controller.registerItem(scope, element);
        }
    };
    
}).
directive('rdsSwitch', function($http, $compile, RdsUtil) {
    
    function getTemplate() {
        return '<span ng-click="field = readonly ? field : !field" class="active-switch" ng-class="{readonly:readonly}">' 
               + '<span ng-show="field"><i class="fa fa-check"></i></span>'
               + '<span ng-show="!field"><i class="fa fa-times"></i></span>'
            + '</span>';
    }
    
    return {
        scope: {
            field: '=rdsSwitchField',
            model: '=rdsSwitchModel',
            url: '@rdsSwitchUrl',
            readonly: '=rdsSwitchReadonly',
            onSubmit: '&rdsSwitchSubmit',
            onSuccess: '&rdsSwitchSuccess',
            onError: '&rdsSwitchError',
            onFault: '&rdsSwitchFault'
        },
        compile: function(element, attrs) {
            
            return {
                pre: function(scope, element, attrs) {
                    if ($(element).html() == '') {
                        $(element).html( $compile( getTemplate() )(scope) );
                    }
                },
                post: function(scope, element, attrs) {
                    scope.$watch('field', function(newValue, oldValue) {
                        if (newValue != oldValue) {
                            $http({
                                url: RdsUtil.fixUrl(scope.url),
                                method: 'POST',
                                data: scope.model
                            }).
                            success(function(response) {
                                if (angular.isObject(response)) {
                                    if (response.errors) {
                                        if (scope.onError) scope.$eval(scope.onError, {response:response});
                                    } else {
                                        if (scope.onSuccess) scope.$eval(scope.onSuccess, {response:response});
                                    }
                                } else {
                                    if (scope.onFault) scope.$eval(scope.onFault);
                                }
                            }).
                            error(function() {
                                if (scope.onFault) scope.$eval(scope.onFault);
                            });
                        }
                    });
                }
            };
            
        }
    };
    
}).
directive('rdsTabs', function($location) {
    
    return {
        restrict: 'A',
        scope: {
            defaultTab: '@rdsTabs'
        },
        link: function(scope, element, attrs) {
            
            var tabs = $(element).find('[rds-tabs-tab]');
            var containers = $(element).find('[rds-tabs-container]');
            var baseUrl = $location.path();
            
            if (scope.defaultTab) {
                baseUrl = baseUrl.replace('/' + scope.defaultTab, '');
            } else {
                scope.defaultTab = $(tabs[0]).attr('rds-tabs-tab');
            }
            
            openTab(scope.defaultTab);
            
            tabs.on('click', function() {
                var key = $(this).attr('rds-tabs-tab');
                scope.$apply(function() {
                    openTab(key);
                });
            });
            
            function openTab(key) {
                tabs.removeClass('active');
                containers.removeClass('active');
                $(element).find('[rds-tabs-tab=' + key + ']').addClass('active');
                $(element).find('[rds-tabs-container=' + key + ']').addClass('active');
                
                $location.path(baseUrl + '/' + key);
            };
            
        }
    };
    
}).
directive('rdsTree', function($http, $timeout) {
	
	return {
		controller: function($scope, $element, $attrs) {
			var tree = $($element);
			var root, branchCart, leafCart, branchSortable, branchTemplate, leafSortable, leafTemplate;
			var branches = [];
			var leaves = [];
			
			var url = $attrs.rdsTreeUrl;
			if (url) {
                if (url.substring(url.length - 1) != '/') url += '/';
                
                if ($attrs.rdsTreeSubmit) $scope.$eval($attrs.rdsTreeSubmit);
                
                $http({
                    url: url
                }).
                success(function(response) {
                    if (angular.isObject(response)) {
                        root.scope.data = response.data.root;
                        
                        if (branchCart) {
                            branchCart.scope.data = response.data.branches;
                        }
                        
                        if (leafCart && angular.isDefined(response.data.leaves)) {
                            leafCart.scope.data = response.data.leaves;
                        }
                        
                        if (response.errors) {
                            if ($attrs.rdsTreeError) $scope.$eval($attrs.rdsTreeError, {response:response});
                        } else {
                            if ($attrs.rdsTreeSuccess) $scope.$eval($attrs.rdsTreeSuccess, {response:response});
                        }
                    } else {
                        if ($attrs.rdsTreeFault) $scope.$eval($attrs.rdsTreeFault);
                    }
                }).error(function() {
                    if ($attrs.rdsTreeFault) $scope.$eval($attrs.rdsTreeFault);
                });
			}
			
			function detachBranchChildren(branch) {
				branch.element.children('[rds-tree-leaf-list]').children('[rds-tree-leaf]').each(function() {
					leafCart.scope.append(getLeafByElement($(this)));
				});
				
				branch.element.children('[rds-tree-branch-list]').children('[rds-tree-branch]').each(function() {
					subbranch = getBranchByElement($(this));
					branchCart.scope.append(subbranch);
					detachBranchChildren(subbranch);
				});
			}
			
			function updateLastItems() {
				tree.find('.branch-list').each(function() {
					var branches = $(this).children(':visible').removeClass('last');
					var leaves = $(this).siblings('.leaf-list').children(':visible').removeClass('last');
					
					if (leaves.length != 0) {
						var last = leaves.last();
						if (last.hasClass('ui-sortable-helper')) {
							last = last.prev();
							while (last.css('display') == 'none') last = last.prev();
						}
						last.addClass('last');
					} else if (branches.length != 0) {
						var last = branches.last();
						if (last.hasClass('ui-sortable-helper')) {
							last = last.prev();
							while (last.css('display') == 'none') last = last.prev();
						}
						last.addClass('last');
					}
				});
			}
			
			function getSaveData() {
				var data = {
					root: getBranchData(root.element.find('.root')),
					leaves: {}
				};
				
				if (branchCart) {
					var order = 1;
					branchCart.element.find('[rds-tree-branch-list]').children('[rds-tree-branch]').each(function() {
						var branch = getBranchByElement($(this));
						branch.scope.branch.parent_id = 0;
						if (branch.scope.branch.order) branch.scope.branch.order = order;
						if (angular.isUndefined(data.branches)) data.branches = [];
						var obj = {};
						obj[branch.scope.model] = branch.scope.branch;
						data.branches.push(obj);
						order ++;
					});
				}
				
				if (leafCart) {
					var order = 1;
					leafCart.element.find('[rds-tree-leaf-list]').children('[rds-tree-leaf]').each(function() {
						var leaf = getLeafByElement($(this));
						leaf.scope.leaf[leaf.scope.leafParentField] = 0;
						if (leaf.scope.leaf.order) leaf.scope.leaf.order = order;
						if (angular.isUndefined(data.leaves[leaf.scope.model])) data.leaves[leaf.scope.model] = [];
						data.leaves[leaf.scope.model].push(leaf.scope.leaf);
						order ++;
					});
				}
				
				return data;
			}
			
			function getBranchData(element) {
				var data = {};
				
				var branch = getBranchByElement(element);
				data[branch.scope.model] = branch.scope.branch;
				
				var order = 1;
				element.children('[rds-tree-branch-list]').children('[rds-tree-branch]').each(function() {
					var subbranch = getBranchByElement($(this));
					subbranch.scope.branch.parent_id = branch.scope.branch.id;
					if (subbranch.scope.branch.order) subbranch.scope.branch.order = order;
					if (angular.isUndefined(data.children)) data.children = [];
					data.children.push(getBranchData(subbranch.element));
					order ++;
				});
				
				var order = 1;
				element.children('[rds-tree-leaf-list]').children('[rds-tree-leaf]').each(function() {
					var leaf = getLeafByElement($(this));
					leaf.scope.leaf[branch.scope.leafParentField] = branch.scope.branch.id;
					if (leaf.scope.leaf.order) leaf.scope.leaf.order = order;
					if (angular.isUndefined(data[leaf.scope.model])) data[leaf.scope.model] = [];
					data[leaf.scope.model].push(leaf.scope.leaf);
					order ++;
				});
				
				return data;
			}
			
			function getBranchByElement(element) {
				for (var i in branches) {
					if (branches[i].element[0] == element[0]) return branches[i];
				}
				return null;
			}
			
			function getLeafByElement(element) {
				for (var i in leaves) {
					if (leaves[i].element[0] == element[0]) return leaves[i];
				}
				return null;
			}
			
			this.registerRoot = function(scope, element) {
				root = {scope:scope, element:$(element)};
				
				scope.branchLevels = $attrs.rdsTreeBranchLevels ? $attrs.rdsTreeBranchLevels : 0;
				if ($attrs.rdsTreeBranchEmptyPlaceholder) scope.branchEmptyPlaceholder = $attrs.rdsTreeBranchEmptyPlaceholder;
				if ($attrs.rdsTreeLeafEmptyPlaceholder) scope.leafEmptyPlaceholder = $attrs.rdsTreeLeafEmptyPlaceholder;
				if ($attrs.rdsTreeLeafParentField) scope.leafParentField = $attrs.rdsTreeLeafParentField;
			};
			
			this.registerBranchCart = function(scope, element) {
				branchCart = {scope:scope, element:$(element)};
				
				if ($attrs.rdsTreeBranchEmptyPlaceholder) scope.branchEmptyPlaceholder = $attrs.rdsTreeBranchEmptyPlaceholder;
				if ($attrs.rdsTreeLeafEmptyPlaceholder) scope.leafEmptyPlaceholder = $attrs.rdsTreeLeafEmptyPlaceholder;
				if ($attrs.rdsTreeLeafParentField) scope.leafParentField = $attrs.rdsTreeLeafParentField;
			};
			
			this.registerLeafCart = function(scope, element) {
				leafCart = {scope:scope, element:$(element)};
				
				if ($attrs.rdsTreeLeafEmptyPlaceholder) scope.leafEmptyPlaceholder = $attrs.rdsTreeLeafEmptyPlaceholder;
				if ($attrs.rdsTreeLeafParentField) scope.leafParentField = $attrs.rdsTreeLeafParentField;
			};
			
			this.registerBranchList = function(scope, element) {
			    if ($attrs.rdsTreeInteractive) {
                    if (branchSortable) branchSortable.sortable('destroy');
                    branchSortable = $($element).find('.branch-list').sortable({
                        connectWith: '.branch-list',
                        dropOnEmpty: true,
                        items: '.branch',
                        helper: 'clone',
                        placeholder: 'drop-placeholder',
                        forcePlaceholderSize: true,
                        start: function(e, ui) {
                            tree.addClass('branch-dragged');
                            ui.item.addClass('dragged');
                            ui.helper.addClass('dragged');
                            branchSortable.sortable('refreshPositions');
                            updateLastItems();
                        },
                        beforeStop: function(e, ui) {
                            tree.removeClass('branch-dragged');
                            ui.item.removeClass('dragged');
                            ui.helper.removeClass('dragged');
                        },
                        stop: function(e, ui) {
                            updateLastItems();
                        },
                        sort: function() {
                            updateLastItems();
                        },
                        receive: function(e, ui) {
                            if (branchCart && branchCart.element.find(this).length == 1) detachBranchChildren(getBranchByElement(ui.item));
                        }
                    }).disableSelection();
			    }
			};
			
			this.branchTemplate = function(value) {
				if (value) branchTemplate = value;
				else return branchTemplate;
			};
			
			this.registerBranch = function(scope, element) {
				branches.push({scope:scope, element:$(element)});
				updateLastItems();
			};
			
			this.registerLeafList = function(scope, element) {
			    if ($attrs.rdsTreeInteractive) {
					if (leafSortable) leafSortable.sortable('destroy');
					leafSortable = $($element).find('.leaf-list').sortable({
						connectWith: '.leaf-list',
						dropOnEmpty: true,
						items: '.leaf',
						helper: 'clone',
						placeholder: 'drop-placeholder',
						forcePlaceholderSize: true,
						start: function(e, ui) {
							tree.addClass('leaf-dragged');
							ui.item.addClass('dragged');
							ui.helper.addClass('dragged');
							leafSortable.sortable('refreshPositions');
							updateLastItems();
						},
						beforeStop: function(e, ui) {
							tree.removeClass('leaf-dragged');
							ui.item.removeClass('dragged');
							ui.helper.removeClass('dragged');
						},
						stop: function() {
							updateLastItems();
						},
						change: function() {
							leafSortable.sortable('refreshPositions');
							updateLastItems();
						},
						sort: function() {
							updateLastItems();
						}
					}).disableSelection();
				}
			};
			
			this.leafTemplate = function(value) {
				if (value) leafTemplate = value;
				else return leafTemplate;
			};
			
			this.registerLeaf = function(scope, element) {
				leaves.push({scope:scope, element:$(element)});
				updateLastItems();
			};
			
			this.save = function(button) {
				if (!root.scope.data) return;
				
				branchSortable.sortable('disable');
				if (leafSortable) leafSortable.sortable('disable');
				$(button).attr('disabled', true);
				
				if ($attrs.rdsTreeSubmit) $scope.$eval($attrs.rdsTreeSubmit);
				
				$http({
					url: url,
					method: 'POST',
					data: getSaveData()
				}).
				success(function(response) {
					branches = [];
					leaves = [];
					
					root.scope.data = null;
					if (branchCart) branchCart.scope.data = null;
					if (leafCart) leafCart.scope.data = null;
					
					$timeout(function() {
						if (angular.isObject(response)) {
							root.scope.data = response.data.root;
							if (branchCart) branchCart.scope.data = response.data.branches;
							if (leafCart) leafCart.scope.data = response.data.leaves;
							
							branchSortable.sortable('enable');
							if (leafSortable) leafSortable.sortable('enable');
							$(button).attr('disabled', false);
							
							if (response.errors) {
								if ($attrs.rdsTreeError) $scope.$eval($attrs.rdsTreeError, {response:response});
							} else {
								if ($attrs.rdsTreeSuccess) $scope.$eval($attrs.rdsTreeSuccess, {response:response});
							}
						} else {
							if ($attrs.rdsTreeFault) $scope.$eval($attrs.rdsTreeFault);
						}
					}, 0);
				}).error(function() {
					branchSortable.sortable('enable');
					if (leafSortable) leafSortable.sortable('enable');
					$(button).attr('disabled', false);
					
					if ($attrs.rdsTreeFault) $scope.$eval($attrs.rdsTreeFault);
				});
			};
		}
	};
	
}).
directive('rdsTreeBranchCart', function() {
	
	return {
		require: '^rdsTree',
		scope: true,
		link: function(scope, element, attrs, treeController) {
			scope.data = null;
			scope.append = function(branch) {
				$(element).find('.branch-cart').append(branch.element);
			};
			treeController.registerBranchCart(scope, element);
		},
		template:
			'<script type="text/ng-template" id="rds-tree-branch-cart-template.html">' +
				'<ul rds-tree-branch-list class="branch-list branch-cart">' +
					'<li ng-if="branchEmptyPlaceholder" class="branch-empty-placeholder">{{branchEmptyPlaceholder}}</li>' +
					'<li ng-repeat="data in data" ng-include="\'rds-tree-branch-template.html\'" rds-tree-branch="true" class="branch"></li>' +
				'</ul>' +
			'</script>' +
			'<div ng-if="data.length >= 0" ng-include="\'rds-tree-branch-cart-template.html\'"></div>'
	};
	
}).
directive('rdsTreeBranch', function($compile, rdsTreeBranchFilter) {
	
	return {
		restrict: 'A',
		require: '^rdsTree',
		scope: true,
		compile: function (element, attrs) {
			var template = !attrs.rdsTreeBranch ? $(element).remove().removeAttr('rds-tree-branch').addClass('branch-name').wrap('<div/>').parent().html() : null;
			
			return {
				pre: function (scope, element, attrs, treeController) {},
				post: function (scope, element, attrs, treeController) {
					if (attrs.rdsTreeBranch) {
						var branchData = rdsTreeBranchFilter(scope.data);
						for (var model in branchData) {
							scope.model = model;
							scope.branch = branchData[model];
							if (!scope.leafParentField) scope.leafParentField = model.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase() + '_id';
							break;
						}
						
						scope.level = angular.isDefined(scope.level) ? scope.level + 1 : 1;
						
						if ($(element).hasClass('root')) {
							scope.$watch('data', function() {
								treeController.registerBranch(scope, element);
							});
						} else {
							var content = $(treeController.branchTemplate());
							$(element).prepend(content);
							$compile(content)(scope);
							
							treeController.registerBranch(scope, element);
						}
					} else treeController.branchTemplate(template);
				}
			};
		}
	};
	
}).
directive('rdsTreeBranchList', function() {
	
	return {
		require: '^rdsTree',
		link: function(scope, element, attrs, treeController) {
			treeController.registerBranchList(scope, element);
		}
	};
	
}).
directive('rdsTreeLeaf', function($compile) {
	
	return {
		restrict: 'A',
		require: '^rdsTree',
		scope: true,
		compile: function (element, attrs) {
			var template = !attrs.rdsTreeLeaf ? $(element).remove().removeAttr('rds-tree-leaf').wrap('<div/>').parent().html() : null;
			
			return {
				pre: function (scope, element, attrs, treeController) {},
				post: function (scope, element, attrs, treeController) {
					if (attrs.rdsTreeLeaf) {
						var content = $(treeController.leafTemplate());
						$(element).html(content);
						$compile(content)(scope);
						treeController.registerLeaf(scope, element);
					} else treeController.leafTemplate(template);
				}
			};
		}
	};
	
}).
directive('rdsTreeLeafCart', function() {
	
	return {
		require: '^rdsTree',
		scope: true,
		link: function(scope, element, attrs, treeController) {
			scope.data = null;
			scope.append = function(leaf) {
				$(element).find('ul').append(leaf.element);
			};
			treeController.registerLeafCart(scope, element);
		},
		template:
			'<script type="text/ng-template" id="rds-tree-leaf-cart-template.html">' +
				'<ul ng-repeat="(model, leaves) in data" rds-tree-leaf-list class="leaf-list leaf-cart">' +
					'<li ng-if="leafEmptyPlaceholder" class="leaf-empty-placeholder">{{leafEmptyPlaceholder}}</li>' +
					'<li ng-repeat="leaf in leaves" rds-tree-leaf="true" class="leaf"></li>' +
				'</ul>' +
			'</script>' +
			'<div ng-if="data" ng-include="\'rds-tree-leaf-cart-template.html\'"></div>'
	};
	
}).
directive('rdsTreeLeafList', function() {
	
	return {
		require: '^rdsTree',
		link: function(scope, element, attrs, treeController) {
			treeController.registerLeafList(scope, element);
		}
	};
	
}).
directive('rdsTreeRoot', function() {
	
	return {
		require: '^rdsTree',
		scope: true,
		link: function(scope, element, attrs, treeController) {
			scope.data = null;
			treeController.registerRoot(scope, element);
		},
		template:
			'<script type="text/ng-template" id="rds-tree-branch-template.html">' +
				'<ul ng-repeat="branches in data | rdsTreeBranches" rds-tree-branch-list class="branch-list">' +
					'<li ng-if="branchEmptyPlaceholder" class="branch-empty-placeholder">{{branchEmptyPlaceholder}}</li>' +
					'<li ng-repeat="data in branches" ng-include="\'rds-tree-branch-template.html\'" rds-tree-branch="true" class="branch"></li>' +
				'</ul>' +
				'<ul ng-repeat="(model, leaves) in data | rdsTreeLeaves" rds-tree-leaf-list class="leaf-list">' +
					'<li ng-if="leafEmptyPlaceholder" class="leaf-empty-placeholder">{{leafEmptyPlaceholder}}</li>' +
					'<li ng-repeat="leaf in leaves" rds-tree-leaf="true" class="leaf"></li>' +
				'</ul>' +
			'</script>' +
			'<div ng-if="data" ng-include="\'rds-tree-branch-template.html\'" rds-tree-branch="true" class="root"></div>'
	};
	
}).
directive('rdsTreeSave', function() {
	
	return {
		require: '^rdsTree',
		link: function(scope, element, attrs, treeController) {
			$(element).click(function() {
				treeController.save(element);
			});
		}
	};
	
}).
directive('rdsWrapper', function() {
	
	return {
		scope: {
			loading: '=?rdsWrapperLoading',
			message: '=?rdsWrapperMessage',
			messageType: '=?rdsWrapperMessageType'
		},
		link: function(scope, element, attrs, controller, transclude) {
			transclude(scope.$parent, function(clone) {
				$(element).children('.content').append(clone);
			});
		},
		transclude: true,
		template:
			'<div class="message" rds-alert="message" rds-alert-type="messageType"></div>' +
			'<div class="content"></div>' +
			'<div class="preloader" ng-show="loading"></div>'
	};
	
}).
filter('rdsCurrency', function() {
    /**
     * input [string]
     */
    
    return function(input) {
        if (isNaN(input)) return input;
        var value = parseFloat(input).toFixed(2);
        var finalValue = '';
        var countPlacesForSpaces = false;
        var placeCount = 0;
        if (value.search('.') == -1) countPlacesForSpaces = true;
        for (var i = value.length - 1; i >= 0; i--) {
            if(countPlacesForSpaces && placeCount % 3 == 0 && placeCount > 0) finalValue = ' ' + finalValue;
            if(countPlacesForSpaces) placeCount++;
            if(value[i] == '.') {
                finalValue = ',' + finalValue;
                countPlacesForSpaces = true;
            }
            else finalValue = value[i] + finalValue;
        }
        return finalValue;
    };
    
}).
filter('rdsDate', function() {
    
    return function(input) {
        return new Date(input).toISOString();
    };

}).
filter('rdsFileSize', function() {
    /**
     * input [string]
     * decimalCount [integer]: default 2
     */
    
    var mb = 1024 * 1024;
    var kb = 1024;
    
    return function(input, decimalCount) {
        input = parseInt(input);
        if (isNaN(input)) input = 0;
        if (angular.isUndefined(decimalCount)) decimalCount = 2;
        var factor = Math.pow(10, decimalCount);
        var sizeSign = 'B';
        if (input > mb) {
            input /= mb;
            sizeSign = 'MB';
        } else if (input > kb) {
            input /= kb;
            sizeSign = 'KB';
        }
        input = Math.round(input * factor) / factor;
        return input + ' ' + sizeSign;
    };
    
}).
filter('rdsFloat', function() {
    /**
     * input [string]
     * decimalCount [integer]: default 2
     * decimalSeparator [string]: '.', ',' - default '.'
     */
    
    return function(input, decimalCount, decimalSeparator) {
        if (angular.isUndefined(decimalCount)) decimalCount = 2;
        if (angular.isUndefined(decimalSeparator)) decimalSeparator = '.';
        
        input = input.replace(',', '.');
        input = input.replace(decimalSeparator, '.');
        input = parseFloat(input);
        if (isNaN(input)) input = 0;
        return input.toFixed(decimalCount).replace('.', decimalSeparator);
    };
    
}).
filter('rdsInteger', function() {
    /**
     * input [string]
     * natural [boolean]: default false
     * allowZero [boolean]: default true
     */
    
    return function(input, natural, allowZero) {
        if (angular.isUndefined(natural)) natural = false;
        if (angular.isUndefined(allowZero)) allowZero = true;
        
        input = parseInt(input);
        if (isNaN(input)) input = 0;
        if (natural == true) {
            if (allowZero == true) {
                if (input < 0) input = 0;
            } else {
                if (input < 1) input = 1;
            }
        }
        return input;
    };
    
}).
filter('rdsObjectToHtmlList', function() {
    
    var _values;
    
    function _processObject(object) {
    	var lis = '';
		if (!angular.isObject(object)) {
			if (_values.indexOf(object) == -1) {
				_values.push(object);
				lis += '<li>' + object + '</li>';
			}
		} else {
			for (var i in object) {
				lis += _processObject(object[i]);
			}
		}
		return lis;
	}
    
    return function(input) {
    	_values = [];
        return '<ul>' + _processObject(input) + '</ul>';
    };
    
}).
filter('rdsPercent', function() {
    /**
     * input [string]
     * decimalCount [integer]: default 0
     */
    
    return function(input, decimalCount) {
        if (angular.isUndefined(decimalCount)) decimalCount = 0;
        
        input = input.replace(',', '.');
        input = parseFloat(input);
        if (isNaN(input)) input = 0;
        return input.toFixed(decimalCount) + '%';
    };
    
}).
filter('rdsPlainText', function() {
    /**
     * input [string]
     */
    
    return function(text) {
        return String(text).replace(/<[^>]+>/gm, '');
    };
    
}).
filter('rdsLimitTo', function(limitToFilter) {
    /**
     * input [string]
     */
    
    return function(text, limit, ellipsis) {
        if (angular.isDefined(text) && text != null) {
            if (!ellipsis) ellipsis = '...';
            if (text.length <= limit) ellipsis = '';
            var output = limitToFilter(text, limit);
            if (!angular.isArray(text)) output += ellipsis;
            return output;
        } else {
            return '---';
        }
    };
    
}).
filter('rdsTreeBranch', function() {
	
	return function(items) {
		var branch = {};
		for (var model in items) {
			if (angular.isObject(items[model]) && !angular.isArray(items[model])) branch[model] = items[model];
		}
		return branch;
	};
	
}).
filter('rdsTreeBranches', function() {
	
	return function(items) {
		var branches = [];
		for (var i in items) {
			if (angular.isArray(items[i]) && i == 'children') branches.push(items[i]);
		}
		return branches;
	};
	
}).
filter('rdsTreeLeaves', function() {
	
	return function(items) {
		var leaves = {};
		for (var model in items) {
			if (angular.isArray(items[model]) && model != 'children') leaves[model] = items[model];
		}
		return leaves;
	};
	
});
