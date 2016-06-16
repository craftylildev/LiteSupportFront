"use strict";

LiteSupport.controller('CustomerController', [
  '$http', 
  '$scope',

  function ($http, $scope) {

    $scope.customers = [];

    $http
      .get('http://localhost:5000/api/Customer')
      .success(cus => $scope.customers = cus);

    $scope.addCustomer = function () {
      $http({
        url:'http://localhost:5000/api/Customer',
        method: 'POST',
        data: JSON.stringify({
            FirstNameC: $scope.newCustomer.FirstNameC,
            LastNameC: $scope.newCustomer.LastNameC,
            Company: $scope.newCustomer.Company,
            URL: $scope.newCustomer.URL,
            EmailC: $scope.newCustomer.EmailC,
            PhoneC: $scope.newCustomer.PhoneC
          })
      })
      .success(newCustomer => console.log('201 Created', newCustomer))
    };

  }
]);