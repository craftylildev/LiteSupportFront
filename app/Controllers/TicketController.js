"use strict";

LiteSupport.controller('TicketController', [
  '$http', 
  '$scope',
  '$location',

  function ($http, $scope, $location) {

    $scope.tickets = [];
    $scope.customers = [];
    $scope.newTicket = {};

    // get ticket list
    $http
      .get('http://localhost:5000/api/Ticket')
      .success(tic => $scope.tickets = tic);

    // pull customer list to create new ticket
      $http
      .get('http://localhost:5000/api/Customer')
      // .success(cus => console.log("cus", cus)); 
      .success(cus => $scope.customers = cus);    
    
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

    // edit ticket details
    $scope.editTicket = function (id) {
       // console.log(id);      
      $http({
        method: 'GET',
        url:`http://localhost:5000/api/Ticket/${id}`
      })
      .success( function(tic) {
        $scope.$parent.tic = tic[0];        
      })
      .then(function() {
        $location.path("/edit-ticket")
      })
    }

    // save changes to edit ticket
    $scope.saveTicket = function (id) {
      // console.log("id", id);
      $http({
        url:`http://localhost:5000/api/Ticket/${id}`,
        method: 'PUT',
        data: JSON.stringify({
            TicketId: $scope.tic.TicketId,
            Title: $scope.tic.Title,
            Description: $scope.tic.Description,
            TtypeId: $scope.tic.TtypeId,
            PriorityId: $scope.tic.PriorityId,
            CustomerId: $scope.tic.CustomerId
         })
      })
      .success( function(tic) {
          $scope.$parent.tic = tic;        
      })
      .then(function() {
         $location.path(`/details-ticket/${id}`)
      })
    };

    
    // add new ticket
    $scope.addTicket = function () {
      // console.log("Title", $scope.tic.Title);
      $scope.tic.DateCreatedT = new Date();

      $http({
        url:'http://localhost:5000/api/Ticket',
        method: 'POST',
        data: JSON.stringify({
            Title: $scope.tic.Title,
            Description: $scope.tic.Description,
            TtypeId: $scope.tic.TtypeId,
            PriorityId: $scope.tic.PriorityId,
            CustomerId: $scope.tic.CustomerId,
            DateCreatedT: $scope.tic.DateCreatedT
          })
      })
      .success(tic => console.log('201 Created', tic))
      // .success( function(tic) {
      //     $scope.$parent.tic = tic;        
      // })
      .then(function() {
         $location.path("/tickets")
      })
    };

  }
]);