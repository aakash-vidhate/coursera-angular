(function () {
'use strict';

angular.module('data')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['MenuDataService', 'items'];
function MainShoppingListController(MenuDataService, items) {
  var mainList = this;
  //var getitems= items
  //mainList.items=[];
  mainList.items=items;
  //items

}

})();
