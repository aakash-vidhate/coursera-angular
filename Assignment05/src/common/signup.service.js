(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);
RegistrationService.$inject = ['$http', 'ApiPath'];

function RegistrationService($http, ApiPath) {
  var service = this;
  var items=[];
  service.user={};
  //var element = {};
  service.testItems=function (fname,lname,email,phno,short_name) {

    items.fname = fname;
    items.lname = lname;
    items.email=email;
    items.phno=phno;
    items.menuno=short_name;
    items.push(items);
    return $http.get(ApiPath + '/menu_items/'+ short_name +'.json');

  };

  service.savedet = function(user) {
    service.user = angular.copy(user);
    console.log(service.user);
  }

  service.getItems=function () {
    return items;
  };

  service.getdet = function() {
    return service.user;
  }
}
})();
