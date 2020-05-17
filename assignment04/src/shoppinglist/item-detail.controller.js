(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['item'];
function ItemDetailController(item) {
  var ctrl= this;
  //var getitems= items
  //mainList.items=[];
  ctrl.item=item.menu_items;
  ctrl.category=item.category;
  //items

}
})();
// (function () {
// 'use strict';
//
// angular.module('MenuApp')
// .controller('ItemsController', ItemsController);
//
//
// ItemsController.$inject = ['item'];
// function ItemsController(category) {
//   var self = this;
//   self.items = item.menu_items;
//   self.category = item.category;
// }
//
// })();
