(function () {
'use strict';

angular.module('data')
.component('itemsList', {
  templateUrl: 'src/shoppinglist/templates/itemslist.template.html',
  bindings: {
    item: '<'
  }
});

})();
