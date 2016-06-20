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
      .when('/add-employee', {
        templateUrl: 'partials/add-employee.html',
        controller: 'EmployeeController'
      })
      .when('/details-employee', {
        templateUrl: 'partials/details-employee.html',
        controller: 'EmployeeController'
      })
      .when('/edit-employee', {
        templateUrl: 'partials/edit-employee.html',
        controller: 'EmployeeController'
      })
      .when('/customers', {
        templateUrl: 'partials/customers.html',
        controller: 'CustomerController'
      })
      .when('/add-customer', {
        templateUrl: 'partials/add-customer.html',
        controller: 'CustomerController'
      })
      .when('/details-customer', {
        templateUrl: 'partials/details-customer.html',
        controller: 'CustomerController'
      })
      .when('/edit-customer', {
        templateUrl: 'partials/edit-customer.html',
        controller: 'CustomerController'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: "/"
      });
  }]);
