"use strict";

LiteSupport.controller('CustomerController', [
  '$http', 
  '$scope',

  function ($http, $scope) {

    $scope.customers = [];

    $http
      .get('http://localhost:5000/api/Customer')
      .success(cus => $scope.customers = cus);

   
  }
]);