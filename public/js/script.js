			angular.module('myApp', ['duScroll','ngRoute','ngDialog'])
				.config(function($routeProvider,$locationProvider){
					$routeProvider
					.when('/openRoute/:id',
					{
					template:'',
					controller:'openRoute'
					})
				})
				.run(function($rootScope){
					$rootScope.$on('duScrollspy:becameActive', function($event, $element,$scope,$location){
						var hash = $element.prop('hash');
						console.log(hash);
						switch (hash){
							case '#home':
							$rootScope.headerBorder = 'border-purple';
							$rootScope.headerLogo = 'hidden';
							$rootScope.$apply();
							break;
							case '#about':
							$rootScope.headerBorder = 'border-tomato';
							$rootScope.headerLogo = 'show';
							$rootScope.aboutAnimation = 'entrances';
							$rootScope.$apply();
							break;
							case '#services':
							$rootScope.headerBorder = 'border-orange';
							$rootScope.$apply();
							break;
							case '#works':
							$rootScope.headerBorder = 'border-green';
							$rootScope.labelWorksAnimation = 'entrances';
							$rootScope.worksAnimation = 'worksEntances';
							$rootScope.$apply();
							break;
							case '#contact':
							$rootScope.headerBorder = 'border-blue';
							$rootScope.contactAnimation = 'entrances';
							$rootScope.$apply();
							break;
						}
					});
				})
				.value('duScrollDuration', 2000)
 				.controller('MyCtrl', function($scope, $document,$http){
 				var userName = 'creativemints';
 				var url = 'http://behance.net/v2/users/'+userName+'/projects/?api_key=ZLBxK9rEfHwJf9K0rmseNr2fS2gS2HJW&per_page=6'
 					+'&callback=JSON_CALLBACK';
 					$http.jsonp(url).then(function(response){
 					$scope.items = response.data;
 					console.log('bheance')
 				}, function(errResponse){
 					console.error('Error')
 					});
  				})
  				.controller('openRoute', function($http,$scope,$routeParams,$sce,ngDialog,$window){
				var projectId = $routeParams.id;
				console.log('open');
				console.log(projectId);
				if(typeof projectId !== 'undefined'){
				ngDialog.open({
	   			template: '/project.html',
	    		controller:'project',
	    		cache: true,
	    		showClose: true,
	    		preCloseCallback: function () {
					$window.location.href="#/";
					}
					});
					}		
				})
				.controller('project', function($http,$scope,$routeParams,$sce,ngDialog){
				var projectId = $routeParams.id;
				$scope.trustAsHtml = $sce.trustAsHtml;
 				var url = 'http://behance.net/v2/projects/'+projectId+'?api_key=ZLBxK9rEfHwJf9K0rmseNr2fS2gS2HJW'
 				+'&callback=JSON_CALLBACK';
 			$http.jsonp(url).then(function(project){
 				$scope.items = project.data;
 			}, function(errResponse){
 			console.error('Error')
 			});	
		})
