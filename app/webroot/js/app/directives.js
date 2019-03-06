/* global name */
angular.module('appDirectives', []).
filter('htmlToPlaintext', function() { 
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }
).

directive('appAnnotation', function() {
	
	return {
		scope: {},
		link: function(scope, element, attrs) {
		},
		transclude: true,
		template:
			'<div class="icon"><i class="fa fa-lightbulb-o"></i></div>' +
			'<div class="content" ng-transclude></div>'
	};
	
}).

directive('appError', function() {
	
	return {
		scope: true,
		link: function(scope, element, attrs) {
			
			scope.userInfoOpened = false;
			
			scope.toggleUserInfo = function(){
				scope.userInfoOpened = !scope.userInfoOpened;
			};
			
		}
	};
	
}).
directive('appFiles', function($http, RdsUtil){
	
	return {
		scope: true,
		link: function(scope, element, attrs) {
			
			scope.deleteFile = function(fileId) {
				console.log('FILEID: ' + fileId);
				if (fileId != undefined) {
					$http({
						url: RdsUtil.fixUrl('/orders/delete_file'),
						method: 'POST',
						data: fileId
					}).
					success(function(response) {
						scope.loading = false;
						if (angular.isObject(response)) {
							if (!response.errors) {
								window.location.reload();	
							} else {
								scope.message = response.errors;
								scope.messageType = 'danger';
							}
						} else {
							scope.message = response.errors;
							scope.messageType = 'danger';
						}
					}).
					error(function() {
						scope.loading = false;
						scope.message = scope.errorMessage;
						scope.messageType = 'danger';
					});
				}
				
			}
			
		}
	}
	
}).
directive('appImage', function(RdsUtil) {
	
	return {
		scope: {
			src: '=appImage',
			thumbSrc: '=appImageThumb',
		},
		link: function(scope, element, attrs) {
			
			scope.fullscreenEnabled = false;
			
			scope.openFullScreen = function(){
				scope.fullscreenEnabled = true;
			};
			
			scope.closeFullScreen = function(){
				scope.fullscreenEnabled = false;
			};
			
		},
		templateUrl: RdsUtil.fixUrl('templates/image')
	};
	
}).
directive('appFile', function(RdsUtil) {
	
	return {
		scope: {
			file: '=appFile',
		},
		link: function(scope, element, attrs) {
			
		},
		templateUrl: RdsUtil.fixUrl('templates/file')
	};
	
}).
directive('appMainMenu', function(RdsUtil) {
	
	return {
		scope: true,
		link: function(scope, element, attrs) {
			scope.showLoginPopup = false;
		},
	};
	
}).
directive('appOrder', function($http, $compile, RdsUtil) {
	
	return {
		scope: true,
		link: function(scope, element, attrs) {
			
			var i = -1;
			var j = 2;
			
			
			
			scope.addSocialForm = function() {
				
				j++;

				$http({
					url: RdsUtil.fixUrl('/publisher_website_offers/social_form'),
					method: 'POST',
					data: j
				}).
				success(function(response) {
					scope.loading = false;
					if (angular.isObject(response)) {
						if (!response.errors) {
							var newDom = $(response.data);
							newDom.appendTo('[app-socials]');
							$compile(newDom)(scope);
						} else {
							scope.message = response.errors;
							scope.messageType = 'danger';
						}
					} else {
						scope.message = scope.errorMessage;
						scope.messageType = 'danger';
					}
				}).
				error(function() {
					scope.loading = false;
					scope.message = scope.errorMessage;
					scope.messageType = 'danger';
				});
				
			}
			
			scope.deleteSocialElement = function(id) {
				$http({
						url: RdsUtil.fixUrl('/publisher_website_offers/delete_social_element'),
						method: 'POST',
						data: id
					}).
					success(function(response) {
						if (angular.isObject(response)) {
							if (!response.errors) {
								window.location.reload();
							} else {
								scope.wrapperParams.message = response.errors;
								scope.wrapperParams.messageType = 'danger';
							}
						} else {
							scope.wrapperParams.message = scope.errorMessage;
							scope.wrapperParams.messageType = 'danger';
						}
					}).
					error(function() {
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
			}
			
			scope.deleteSimpleTag = function(id) {
				$http({
						url: RdsUtil.fixUrl('/publisher_website_offers/delete_simple_tag'),
						method: 'POST',
						data: id
					}).
					success(function(response) {
						if (angular.isObject(response)) {
							if (!response.errors) {
								window.location.reload();
							} else {
								scope.wrapperParams.message = response.errors;
								scope.wrapperParams.messageType = 'danger';
							}
						} else {
							scope.wrapperParams.message = scope.errorMessage;
							scope.wrapperParams.messageType = 'danger';
						}
					}).
					error(function() {
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
			}
			
			scope.clientProjects = function(clientId) {
				
				$http({
						url: RdsUtil.fixUrl('/projects/client_project/'+clientId),
						method: 'GET',
						data: clientId
					}).
					success(function(response) {
						scope.orderProjects = response.data;
						scope.contactPersonalities = response.data[0].User.name;
						scope.contactMobile = response.data[0].User.phone;
						scope.contactEmail = response.data[0].User.email;
					}).
					error(function() {
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				
			}
			
			scope.clientAddressSelect = function(address) {
				
				if (address) {
					$http({
						url: RdsUtil.fixUrl('/addresses/get_address/'+address),
						method: 'GET',
						data: address
					}).
					success(function(response) {
						
						if (response.data.Address) {
							scope.contactPersonalities = response.data.Address.name;
							scope.contactMobile = response.data.Address.phone;
							scope.contactEmail = response.data.Address.email;
							scope.contactPreffered = response.data.Address.prefered_contact;
						}
					}).
					error(function() {
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				}
				
			}
			
			scope.selectPhoto = function(photo) {}
			
			scope.highlightSelection = function(step, parentId) {
				
				if (step && parentId) {
					$('#multiple-select #'+step+' li').removeClass('selected');
					$('#multiple-select #'+step+' li.'+step+parentId).addClass('selected');
				}
				
			}
			
			scope.childrenAction = function(parentId) {

				if (parentId == 134) { 
					$('#article-container').css('display', 'block'); 
					
				}
				if (parentId == 155) { 
					
					$('#article-container').css('display', 'none'); 
				}
				
				scope.query.SecondChoice = parentId;
				scope.highlightSelection('secondChoice', parentId);
	
				$http({
						url: RdsUtil.fixUrl('/system_order_elements/get_element_children/'+parentId),
						method: 'GET',
						data: parentId
					}).
					success(function(response) {
						
						if (angular.isObject(response)) {
							if (!response.errors) {
								
								if (response.data != null) {
									$('#thirdChoice').remove();
									var childrenElements = '<ul id="thirdChoice" class="ng-isolate-scope" ng-model="query.ThirdChoice" rds-input-select="[]">';
									
									$.each(response.data, function(index, value) {
										childrenElements += "<li class='thirdChoice"+value.SystemOrderElement.id+"' value='"+value.SystemOrderElement.id+"' ng-click='query.ThirdChoice = "+value.SystemOrderElement.id+"; jsonPath(); highlightSelection(\"thirdChoice\", "+value.SystemOrderElement.id+");'>"+value.SystemOrderElement.name+"</li>";
									}); 
									
									childrenElements += '</ul>';
									
									var childrenElementsObject = $(childrenElements);
									childrenElementsObject.insertAfter('#multiple-select #secondChoice');
									$compile(childrenElementsObject)(scope);
								}
							} 
						} 
					}).
					error(function() {
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				
			}
			
			scope.getChildren = function(parentId) {

				$('#contact').css('display', 'block');
				$('div.form-container').css('display', 'none');
				if (parentId == 101) { $('#title-container').css('display', 'block'); $('#amount').css('display', 'block'); }
				if (parentId == 105) { $('#bloger-container').css('display', 'block'); $('#amount').css('display', 'none'); }
				if (parentId == 100) { $('#publisher-container').css('display', 'block'); $('#amount').css('display', 'none'); }
				
				scope.query.FirstChoice = parentId;
				$('#secondChoice').remove();
				$('#thirdChoice').remove();
				
				$http({
						url: RdsUtil.fixUrl('/system_order_elements/get_element_children/'+parentId),
						method: 'GET',
						data: parentId
					}).
					success(function(response) {
						
						if (angular.isObject(response)) {
							if (!response.errors) {
								if (response.data != null) {
									
								
									var childrenElements = '<ul id="secondChoice" class="ng-isolate-scope" ng-click="jsonPath()" ng-model="query.SecondChoice">';
									
									$.each(response.data, function(index, value) {
										childrenElements += "<li ng-click='childrenAction("+value.SystemOrderElement.id+");' value='"+value.SystemOrderElement.id+"' class='secondChoice"+value.SystemOrderElement.id+"'>"+value.SystemOrderElement.name+"</li>";
									}); 
									
									childrenElements += '</ul>';
									
									var childrenElementsObject = $(childrenElements);
									childrenElementsObject.insertAfter('#multiple-select #firstChoice');
									$compile(childrenElementsObject)(scope);
								}
							} 
						} 
					}).
					error(function() {
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				
			}
			
            scope.ownArticles = function(orderUserId, orderId) {
				$http({
					url: RdsUtil.fixUrl('/orders/publisher_add_article_form'),
					method: 'POST',
					data: {order_id:orderId, user_id:orderUserId }
				}).
				success(function(response) {
					scope.loading = false;
					if (angular.isObject(response)) {
						if (!response.errors) {
							var newDom = $(response.data);
							newDom.appendTo('#articles-list');
							$compile(newDom)(scope);
						} else {
							scope.message = response.errors;
							scope.messageType = 'danger';
						}
					} else {
						scope.message = scope.errorMessage;
						scope.messageType = 'danger';
					}
				}).
				error(function() {
					scope.loading = false;
					scope.message = scope.errorMessage;
					scope.messageType = 'danger';
				});
			}
            
			scope.refusePublication = function(selector) {
				
				$('.refuse'+selector).val(0);
				
			}
			
			scope.selectArticles = function(source, userId, orderId) {
				
                $('#articles-list').empty();
                
				if (source == 1) {
					$http({
						url: RdsUtil.fixUrl('/order_articles/get_client_articles'),
						method: 'POST',
						data: {user_id:userId, order_id:orderId} 
					}).
					success(function(response) {
						if (angular.isObject(response)) {
							if (!response.errors) {
								if (response.data != null) {
									var articlesElements = '<br/><h3>Zaznacz wybrane artykuły</h3><div style="height: 600px; overflow-y: scroll"><table rds-input-select="[]"><thead><tr><th>Tytuł artykułu</th><th>Projekt</th><th>Numer zamówienia</th></tr></thead><tbody><input type="hidden" name="data[OrderPublisherArticle][][order_article_id]" value="" id="OrderPublisherArticle123">';
									
									$.each(response.data, function(index, value) {
										var checkbox = '<div class="checkbox"><input type="checkbox" name="data[OrderPublisherArticle]['+index+'][order_article_id]" value="'+value.OrderArticle.id+'"  id="Article'+value.OrderArticle.id+'"><label for="Article'+value.OrderArticle.id+'">'+value.OrderArticle.title+'</label></div>';
										articlesElements += "<tr><td>"+checkbox+"</td><td>"+value.Order.Project.name+"</td><td>"+value.Order.order_number+"</td></tr>";
									}); 
									
									articlesElements += '</tbody></table></div><br/><br/>';
									
									var articleElementsObject = $(articlesElements);
									articleElementsObject.appendTo('#articles-list');
									$compile(articleElementsObject)(scope);
								}
							} else {
								scope.message = response.errors;
								scope.messageType = 'danger';
							}
						} 
					}).
					error(function() {
						scope.message = scope.errorMessage;
						scope.messageType = 'danger';
					});
				} else if (source == 2) {
					scope.ownArticles(userId, orderId);
				}
				
			}
			
			scope.elementPrice = function(elementID, price) {
				var element = $('#'+elementID).val(parseFloat(price));
				scope.price = parseFloat(price);
			}
			
			scope.calculatePrice = function() {
				
				var pricelist = $('body').find('div#pricelist');
				var checkbox = pricelist.last().find('input[type="radio"]:checked');
				var inputPrice = pricelist.find('input[type="text"][name="data[element_price][' + checkbox.val() + ']"]');
				var valueFind = parseFloat(inputPrice.val());
				//$('#'+valuethis).val(valueFind);
				
				var currentPrice = scope.quantity * valueFind;
				var additionalInfo = '';
				
				if (scope.correction) {
					if (parseFloat(scope.correctionPrice) > 0) {
						currentPrice+= scope.quantity * parseFloat(scope.correctionPrice);
					}
					$('#correctionPrice').css('display', 'block');
				} else {
					$('#correctionPrice').css('display', 'none');
				}
				
				if (scope.expert) {
					if (parseFloat(scope.expertPrice) > 0) {
						currentPrice+= scope.quantity * parseFloat(scope.expertPrice);
					}
					$('#expertPrice').css('display', 'block');
				} else {
					$('#expertPrice').css('display', 'none');
				}
				
				if (scope.keywording) {
					if (parseFloat(scope.keywordingPrice) > 0) {
						currentPrice+= scope.quantity * parseFloat(scope.keywordingPrice);
					}
					$('#keywordingPrice').css('display', 'block');
				} else {
					$('#keywordingPrice').css('display', 'none');
				}
				
				if (scope.expert || scope.correction || scope.keywording) {
					$('#additionalInformation').css('display', 'block');
					var additionalInfo = '*';
				} else {
					$('#additionalInformation').css('display', 'none');
				}
				
				if (scope.photo == 3) {
					currentPrice+= scope.quantity * 10;
				}
				
				if (!isNaN(currentPrice)) {	
				
					totalprice = Math.ceil(currentPrice / 10) * 10;
				
					scope.totalPrice = totalprice;
					$('#totalValue').text(totalprice+' zł'+additionalInfo);
					$('.total_price').val(totalprice);
				}
			}
			
			scope.countLetters = function(realizationId) {

				$(realizationId+' .mce-tinymce').keyup(function () {
					
					var len1 = $(realizationId+' .lead').val().length;
					$(realizationId+' span.letterCount').text(len1);
					
				});
				
			}
			
			scope.jsonPath = function() {

				var firstChoice = scope.query.FirstChoice;
				var secondChoice = scope.query.SecondChoice;
				var thirdChoice = scope.query.ThirdChoice;
				var json = JSON.stringify({firstChoice,secondChoice,thirdChoice});
				$('.json_path').val(json);
				$('.system_order_element_id').val(secondChoice);
				
				if (firstChoice == 100) {
					$('.publisher_order').val(1);
				} else {
					$('.publisher_order').val(0);
				}
				
			}
            
            scope.systemTopicTypeId = function(systemTopicTypeId) {
                
                if (systemTopicTypeId) {
                    $('.system_topic_type_id').val(systemTopicTypeId);
                }
                
            }
			
			scope.clearAfterOrder = function() {
				
				$('.json_path').val('');
				$('#secondChoice').remove();
				$('#thirdChoice').remove();
				$("#multiple-select li").removeClass("selected");
				scope.query.FirstChoice = '';
				scope.query.SecondChoice = '';
				scope.query.ThirdChoice = '';
				
			}
			
			scope.deleteTitleElement = function($event) {
				var titleToDelete = $($event.target).parent('[app-order-title-element]');
				var inputToDelete = titleToDelete.find('input');
				var parentToCompile = titleToDelete.parent();
				scope.unregisterInput(inputToDelete.attr('name'));
				titleToDelete.remove();
				var addedElements = $(element).find('div.orderArticleElement').length;
				var titleElements = $(element).find('[app-order-title-element]').length;
				scope.quantity = titleElements + addedElements;
				scope.calculatePrice();
			}
			
			scope.saveNoDraft = function() {
				
				$('.draft').val(0);
				
			}
			
			scope.deleteTitleDraft = function(orderArticleId) {
				
				if (orderArticleId) {
					$http({
						url: RdsUtil.fixUrl('/orders/delete_article/'+orderArticleId),
						method: 'GET',
						data: orderArticleId
					}).
					success(function(response) {
						
						if (angular.isObject(response)) {
							if (!response.errors) {
								window.location.reload();
							} 
						} 
					}).
					error(function() {
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				}
				
			}
			
			if (angular.isDefined(attrs.appOrderFirstChoice)) {
				scope.getChildren(attrs.appOrderFirstChoice); 
			}
			
			if (angular.isDefined(attrs.appOrderSecondChoice)) {
				scope.childrenAction(attrs.appOrderSecondChoice);
			}
			
			scope.query = {
				FirstChoice: [attrs.appOrderFirstChoice],
				SecondChoice: [attrs.appOrderSecondChoice],
				ThirdChoice: [attrs.appOrderThirdChoice]
			}
			
			
		}
	}
	
}).
directive('appSocialForm', function($http, $compile, RdsUtil) {
	
	return {
		scope: {
			socialFormKey: '=appSocialFormKey'
		},
		link: function(scope, element, attrs) {
			console.log(scope.socialFormKey);
		}
	}
	
}).
directive('appPublicRegister', function($http, $compile, RdsUtil) {
	
	return {
		scope: true,
		link: function(scope, element, attrs) {
			
			scope.selectRole = function() {
			};
		   
		}
	};
	
}).
directive('appRolesRegister', function($http, $compile, RdsUtil) {
	
	return {
		scope: true,
		link: function(scope, element, attrs) {
			
			$(element).find('input[type="checkbox"]').change(function(){
				
				if ($(this).val() == 9) {
					$(element).find('input[type="checkbox"]').prop('checked', false);
					$(this).prop('checked', true);
				} else {
					$(element).find('input[value="9"]').prop('checked', false);
				}
				
			});
			
		}
	};
	
}).
directive('appTableSort', function() {
	
	return {
		scope: {
			orderBy: '=appTableSort'
		},
		link: function(scope, element, attrs) {
		}
	};
}).
directive('appTableSortBy', function($compile) {
	
	var indicatorTemplate = 
		'<span class="order-indicator">'
		+ '<i class="fa fa-sort-alpha-asc" ng-show="orderBy == field"></i>'
		+ '<i class="fa fa-sort-alpha-desc" ng-show="orderBy == minusField"></i>'
	  + '</span>{{myOrderBy}}'
	
	return {
		scope: {
			field: '@appTableSortBy',
			orderBy: '=appTableSortByVar'
		},
		link: function(scope, element, attrs) {
			scope.minusField = '-' + scope.field;
			$(element).on('click', function() {
				if (scope.orderBy == scope.field) {
					scope.orderBy = '-' + scope.field;
				} else {
					scope.orderBy = scope.field;   
				}
				scope.$apply();
			});
			
			scope.$watch('orderBy', function(newValue, oldValue) {
				if (newValue != oldValue) {
					//updateDisplay();
				}
			});
			
			function initDisplay() {
				var orderIndicator = $(indicatorTemplate);
				$(element).append(orderIndicator);
				$compile(orderIndicator)(scope);
			}
			
			function updateDisplay() {
				
			}
			
			initDisplay();
		}
	};
}).
directive('appOrderList', function($http, RdsUtil) {
	
	return {
		scope: true,
		link: function(scope, element, attrs) {
			var _order;
			scope.canUploadSigned = eval(attrs.appInvoiceListCanUploadSigned);
			
			scope.deleteResponse = function(order) {
				if (order) {
					_order = order;
					scope.openDeleteModal();
				} else {
					scope.Flash.set(null);
					scope.wrapperParams.loading = true;
					
					$http({
						url: RdsUtil.fixUrl('/orders/deleteResponse'),
						method: 'POST',
						data: _order.Order.id
					}).
					success(function(response) {
						scope.wrapperParams.loading = false;
						if (angular.isObject(response)) {
							if (!response.errors) {
								scope.reload();
							} else {
								scope.wrapperParams.message = response.errors;
								scope.wrapperParams.messageType = 'danger';
							}
						} else {
							scope.wrapperParams.message = scope.errorMessage;
							scope.wrapperParams.messageType = 'danger';
						}
					}).
					error(function() {
						scope.wrapperParams.loading = false;
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				}
			};
			
			scope.deleteOrderDraft = function(orderID) {

				if (orderID) {
					$http({
						url: RdsUtil.fixUrl('/orders/delete_order_draft/'+orderID),
						method: 'GET',
						data: orderID
					}).
					success(function(response) {
						
						if (angular.isObject(response)) {
							if (!response.errors) {
								scope.reload();
							} 
						} 
					}).
					error(function() {
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				}
				
			}
			
			scope.orderToArchive = function(orderID) {
				if (orderID) {
					$http({
						url: RdsUtil.fixUrl('/orders/orderToArchive/'+orderID),
						method: 'GET',
						data: orderID
					}).
					success(function(response) {
						
						if (angular.isObject(response)) {
							if (!response.errors) {
								scope.reload();
							} 
						} 
					}).
					error(function() {
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				}
				
			}
			
		}
	};
	
}).
directive('appProducts', function($http, RdsUtil) {
	
	return {
		scope: true,
		link: function(scope, element, attrs) {
			var _product;
			
			scope.deleteProduct = function(product) {
				if (product) {
					_product = product;
					scope.openModal();
				} else {
					scope.Flash.set(null);

					$http({
						url: RdsUtil.fixUrl('/products/delete'),
						method: 'POST',
						data: _product.ObiProduct.id
					}).
					success(function(response) {
						if (angular.isObject(response)) {
							if (!response.errors) {
								scope.reload();
							} else {
								scope.wrapperParams.message = response.errors;
								scope.wrapperParams.messageType = 'danger';
							}
						} else {
							scope.wrapperParams.message = scope.errorMessage;
							scope.wrapperParams.messageType = 'danger';
						}
					}).
					error(function() {
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				}
			};
			
			scope.productsFound = 0;
			
			scope.search = function(phrase) {
				if (phrase != undefined && phrase.length > 2) {
					scope.reload();
				}
			}
			
			scope.selectTab = function(tabId) {
				
				if (tabId) {
					$('.tab').removeClass('selected');
					$('.tab-'+tabId).addClass('selected');
					
					$('.detail-tab').fadeOut(300);
					$('.detail-tab-'+tabId).delay(300).fadeIn(300);
				}
			}
		}
	};
	
}).
directive('appUserList', function($http, RdsUtil) {
	
	return {
		scope: true,
		link: function(scope, element, attrs) {
			var _user;
			
			scope.deleteUser = function(user) {
				if (user) {
					_user = user;
					scope.openModal();
				} else {
					scope.Flash.set(null);
					scope.wrapperParams.loading = true;
					
					$http({
						url: RdsUtil.fixUrl('/users/delete'),
						method: 'POST',
						data: _user.User.id
					}).
					success(function(response) {
						scope.wrapperParams.loading = false;
						if (angular.isObject(response)) {
							if (!response.errors) {
								scope.reload();
							} else {
								scope.wrapperParams.message = response.errors;
								scope.wrapperParams.messageType = 'danger';
							}
						} else {
							scope.wrapperParams.message = scope.errorMessage;
							scope.wrapperParams.messageType = 'danger';
						}
					}).
					error(function() {
						scope.wrapperParams.loading = false;
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				}
			};
			
		}
	};
	
}).

directive('appCategoriesList', function($http, RdsUtil) {
	
	return {
		scope: true,
		link: function(scope, element, attrs) {
			var _category;
			
			scope.deleteCategory = function(category) {
				if (category) {
					_category = category;
					scope.openModal();
				} else {
					scope.Flash.set(null);
					scope.wrapperParams.loading = true;
					
					$http({
						url: RdsUtil.fixUrl('/categories/delete'),
						method: 'POST',
						data: _category.ObiCategory.id
					}).
					success(function(response) {
						scope.wrapperParams.loading = false;
						if (angular.isObject(response)) {
							if (!response.errors) {
								scope.reload();
							} else {
								scope.wrapperParams.message = response.errors;
								scope.wrapperParams.messageType = 'danger';
							}
						} else {
							scope.wrapperParams.message = scope.errorMessage;
							scope.wrapperParams.messageType = 'danger';
						}
					}).
					error(function() {
						scope.wrapperParams.loading = false;
						scope.wrapperParams.message = scope.errorMessage;
						scope.wrapperParams.messageType = 'danger';
					});
				}
			};
			
		}
	};
	
}).

directive('appView', function() {
	
	return {
		scope: true
	};
	
}).
directive('preloader', function() {
	
	return {
		restrict: 'AEC',
		template:
			'<div class="spinner-wrapper">' +
				'<i class="fa fa-spinner fa-spin"></i>' +
			'</div>'
	};
	
});
