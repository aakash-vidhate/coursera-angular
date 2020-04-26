(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.lenoutput="";


  $scope.LunchAmount=function()
  {
  var str = $scope.name;
  var res = str.split(",");
  var i;
  for(i=0;i<res.length;i++)
  {
  if(res[i]==""||res[i]==" ")
  {
   res.splice(i,1);
  }
  }
  var op=res.length;
  var msg;
  if(op==0)
  {
    msg="Please enter data first";
    $scope.setstyl= {
        "color" : "red"
      }

    
  }
  else if(op<=3)
  {
    msg="Enjoy!";
    $scope.setstyl= {
        "color" : "green"
      }
  }
  else if(op>3)
  {
    msg="Too much!";
    $scope.setstyl= {
        "color" : "green"
      }
  }
  $scope.lenoutput=msg;
  };
}

})();
