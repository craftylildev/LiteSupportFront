"use strict";

let LiteSupport = angular.module('LiteSupport', [
  'ngRoute'

  ]);

LiteSupport.config(['$routeProvider', 
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController'
      })
      .when('/register', {
        templateUrl: 'partials/Register.html',
        controller: 'RegisterController'
      })
      .otherwise({
        redirectTo: "/"
      });
  }]);