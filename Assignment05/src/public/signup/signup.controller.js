(function () {
"use strict";
angular.module('public')
.controller('RegistrationController', RegistrationController);


RegistrationController.$inject = ['RegistrationService'];
function RegistrationController(RegistrationService) {
  var reg = this;
  var items=[];
reg.wantitems=RegistrationService.getItems();
        reg.user = {};
        reg.favoriteDish = {};
        reg.showError = false;
        reg.showMessage = false;
   //reg.items = RegistrationService.getItems();

  reg.submit = function (fname,lname,email,phno,short_name) {
    reg.completed = true;
    reg.showError = false;
    reg.showMessage = false;
    reg.shortn=angular.uppercase(short_name);
    //reg.user.items=RegistrationService.testItems(fname,lname,email,phno,short_name);
    RegistrationService.testItems(fname,lname,email,phno,reg.shortn).then(function(response) {
               reg.user.favoriteDishDetails = response.data;
               console.log(reg.favoriteDish);
               RegistrationService.savedet(reg.user);
               reg.showMessage = true;
               reg.completed = true;
           }, function(error) {
               console.log(error);
               reg.showError = true;
           });

  };



}



})();
