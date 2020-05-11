(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function foundItemsDirective(){
	var ddo = {

		scope: {
			foundItems: "<",			//One way binding for the attribute menuitems, not specifying a name means that the same name is used
			onRemove: '&onRemove',
		},
		templateUrl: 'template.html',
    restrict: 'E',
    controller: NarrowItDownController,
    controllerAs: 'ctrl',
    bindToController: true,
	};
	return ddo;
}


NarrowItDownController.$inject = ['$scope','MenuSearchService'];
function NarrowItDownController($scope,MenuSearchService) {
  var ctrl= this;
  ctrl.found=null;


  ctrl.logMenuItems = function () {
      const searchTerm = $scope.searchTerm;


      if (!searchTerm || searchTerm.trim().length === 0) {
               ctrl.found = [];
           } else {
               MenuSearchService.getMatchedMenuItems(searchTerm.toLowerCase())
               .then(foundItems => {
                   ctrl.found = foundItems;
                   //console.log(ctrtl.found);
               });
           }


  };

//console.log($scope.found);

  ctrl.deleteItem = function(index){
		ctrl.found.splice(index,1);
};

ctrl.responseEmpty = function () {
					return ctrl.requestMade && ctrl.foundItems.length === 0;
			};


}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
 //var foundto = [];


  service.getMatchedMenuItems = function (searchTerm) {

		return $http({ url: (ApiBasePath + "/menu_items.json") })
            .then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data.menu_items.filter(i => i.description.toLowerCase().indexOf(searchTerm) >= 0);


                // return processed items
                return foundItems;
            });




  };




}

})();
