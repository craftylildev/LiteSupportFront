"use strict";

LiteSupport.controller('TicketController', [
  '$http', 
  '$scope',

  function ($http, $scope) {

    $scope.tickets = [];

    $http
      .get('http://localhost:5000/api/Ticket')
      .success(tic => $scope.tickets = tic);

   
  }
]);