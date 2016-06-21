"use strict";

LiteSupport.controller('TicketController', [
  '$http', 
  '$scope',
  '$location',

  function ($http, $scope, $location) {

    $scope.tickets = [];

    // get ticket list
    $http
      .get('http://localhost:5000/api/Ticket')
      .success(tic => $scope.tickets = tic);




    // view ticket details
    $scope.detailTicket = function (id) {
      console.log(id);
      $http({
        method: 'GET',
        url:`http://localhost:5000/api/Ticket/${id}`
      })
      .success( function(tic) {
        $scope.$parent.tic = tic[0];        
        console.log("$scope.$parent.tic", $scope.$parent.tic);
      })
      .then(function() {
        $location.path("/details-ticket")
        console.log("$scope.$parent.tic-2", $scope.$parent.tic);

      })
    }

   
  }
]);