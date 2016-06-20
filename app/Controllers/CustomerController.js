"use strict";

LiteSupport.controller('CustomerController', [
  '$http', 
  '$scope',
  '$location',

  function ($http, $scope, $location) {

    $scope.customers = [];

    // get customer list
    $http
      .get('http://localhost:5000/api/Customer')
      .success(cus => $scope.customers = cus);

    // add new customer
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
      .then(function() {
         $location.path("/customers")
      })
    };

    // view customer details
    $scope.detailCustomer = function (id) {
      // console.log(id);
      $http({
        method: 'GET',
        url:`http://localhost:5000/api/Customer/${id}`
      })
      .success( function(cus) {
        $scope.$parent.cus = cus;        
        // console.log("$scope.$parent.cus", $scope.$parent.cus);
      })
      .then(function() {
        $location.path("/details-customer")
        console.log("$scope.$parent.cus-2", $scope.$parent.cus);

      })
    }

    // edit customer details
    $scope.editCustomer = function (id) {
       // console.log(id);
       $http({
          method: 'GET',
          url:`http://localhost:5000/api/Customer/${id}`
        })
      .success( function(cus) {
          $scope.$parent.cus = cus;        
      })
      .then(function() {
          $location.path("/edit-customer")
      })
    }

  // save changes to edit customer
  $scope.saveCustomer = function (id) {
      // console.log("id", id);
      $http({
        url:`http://localhost:5000/api/Customer/${id}`,
        method: 'PUT',
        data: JSON.stringify({
            CustomerId: $scope.cus.CustomerId,
            FirstNameC: $scope.cus.FirstNameC,
            LastNameC: $scope.cus.LastNameC,
            Company: $scope.cus.Company,
            URL: $scope.cus.URL,
            EmailC: $scope.cus.EmailC,
            PhoneC: $scope.cus.PhoneC
          })
      })
      .success( function(cus) {
          $scope.$parent.cus = cus;        
      })
      .then(function() {
         $location.path("/customers")
      })
    };



  }
]);