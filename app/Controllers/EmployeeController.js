"use strict";

LiteSupport.controller('EmployeeController', [
  '$http', 
  '$scope',

  function ($http, $scope) {

    $scope.employees = [];

    $http
      .get('http://localhost:5000/api/Employee')
      .success(emp => $scope.employees = emp);

    
  }
]);