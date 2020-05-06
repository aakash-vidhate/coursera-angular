(function () {
'use strict';



angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var ToBuy = this;
  ToBuy.items = ShoppingListService.getItems();

  ToBuy.boughtitem=function (itemindex) {
    ShoppingListService.boughtitem(itemindex);
  };
  // ToBuy2.addItem = function () {
  //   ShoppingListService.addItem(ToBuy2.itemName, ToBuy2.itemQuantity);
  // }
}


AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var AlreadyBought = this;

  AlreadyBought.items = ShoppingListService.getItems2();

}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [{
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Coke",
    quantity: "5"
  }];

  var items2 = [];
  // service.addItem = function (itemName, quantity) {
  //   var item = {
  //     name: itemName,
  //     quantity: quantity
  //   };
  //   items.push(item);
  // };
  //
  // service.removeitem=function (itemindex) {
  //   items.splice(itemindex,1);
  // };

  service.boughtitem=function (itemindex) {
    var item =items[itemindex];
    items2.push(item);
    items.splice(itemindex,1);

  };


  service.getItems = function () {
    return items;

  };

  service.getItems2 = function () {
    return items2;

  };
}

})();

// var ToBuy=
//  [
//   {
//     name: "Milk",
//     quantity: "2"
//   },
//   {
//     name: "Donuts",
//     quantity: "200"
//   },
//   {
//     name: "Cookies",
//     quantity: "300"
//   },
//   {
//     name: "Chocolate",
//     quantity: "5"
//   }
// ];
