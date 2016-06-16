"use strict";

let LiteSupport = angular.module('LiteSupport', [
  'ngRoute'

  ]);

LiteSupport.config(['$routeProvider', 
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/tickets.html',
        controller: 'TicketController'
      })
      .when('/employees', {
        templateUrl: 'partials/employees.html',
        controller: 'EmployeeController'
      })
      .when('/customers', {
        templateUrl: 'partials/customers.html',
        controller: 'CustomerController'
      })
      .when('/add-customer', {
        templateUrl: 'partials/add-customer.html',
        controller: 'AddCustomerController'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: "/"
      });
  }]);
