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
      .when('/add-ticket', {
        templateUrl: 'partials/add-ticket.html',
        controller: 'TicketController'
      })
      .when('/details-ticket', {
        templateUrl: 'partials/details-ticket.html',
        controller: 'TicketController'
      })
      .when('/edit-ticket', {
        templateUrl: 'partials/edit-ticket.html',
        controller: 'TicketController'
      })
      .when('/add-comment', {
        templateUrl: 'partials/add-comment.html',
        controller: 'CommentController'
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
