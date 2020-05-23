(function () {
"use strict";
angular.module('public')
.controller('MyinfoController', MyinfoController);


//RegistrationItemController.$inject = ['signitems','$stateParams'];
MyinfoController.$inject = ['RegistrationService','ApiPath'];
function MyinfoController(RegistrationService, ApiPath) {
  var myinfor = this;

       myinfor.basePath = ApiPath;

       myinfor.signedUp = false;

       myinfor.user = RegistrationService.getdet();
       console.log('User is', myinfor.user);
       if (angular.equals(myinfor.user, {})) {
           myinfor.signedUp = false;
       } else {
           myinfor.signedUp = true;
       }






}



})();
