(function () {
'use strict';

angular.module('data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();

         }]
    }
  })

  .state('categoriesdet', {
    url: '/categoriesdet/{shortName}/items',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
       item: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
         return MenuDataService.getItemsForCategory($stateParams['shortName']);
       }]
     }
   });


  // })
  //
  // // Item detail
  // .state('items', {
  //   url: '/categories/{shortName}/items',
  //   templateUrl:'src/shoppinglist/templates/itemslist.template.html',
  //   controller: 'ItemDetailController as itemDetail',
  //   resolve: {
  //     item: ['$stateParams','MenuDataService',
  //      function (MenuDataService,$stateParams) {
  //         return MenuDataService.getItemsForCategory($stateParams['shortName']);
  //
  //
  //        }]
  //      }
  // });

}

})();
