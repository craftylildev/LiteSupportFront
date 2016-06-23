"use strict";

LiteSupport.controller('TicketController', [
  '$http', 
  '$scope',
  '$location',

  function ($http, $scope, $location) {

    $scope.tickets = [];
    $scope.customers = [];

    // get ticket list
    $http
      .get('http://localhost:5000/api/Ticket')
      .success(tic => $scope.tickets = tic);

    // pull customer list to create new ticket
    $http
      .get('http://localhost:5000/api/Customer')
      // .success(cus => console.log("cus", cus)); 
      .success(cus => $scope.customers = cus);   

    // pull comment list to create new comment
    $http
      .get('http://localhost:5000/api/Comment')
      // .success(com => console.log("com", com)); 
      .success(com => $scope.comments = com);   

    $http
      .get('http://localhost:5000/api/Employee')
      // .success(emp => console.log("emp", emp)); 
      .success(emp => $scope.employees = emp);   

    // view ticket details
    $scope.detailTicket = function (id) {
      // console.log(id);
      $http({
        method: 'GET',
        url:`http://localhost:5000/api/Ticket/${id}`
      })
      .success( function(tic) {
        $scope.$parent.tic = tic[0];
        $scope.$parent.CommentList = tic[0].Comment;
      })
      .then(function() {
        $location.path("/details-ticket")
      })
    }

    // edit ticket details
    $scope.editTicket = function (id) {
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
      $http({
        url:`http://localhost:5000/api/Ticket/${id}`,
        method: 'PUT',
        data: JSON.stringify({
            TicketId: $scope.tic.TicketId,
            Title: $scope.tic.Title,
            Description: $scope.tic.Description,
            TtypeId: $scope.tic.TtypeId,
            PriorityId: $scope.tic.PriorityId,
            CustomerId: $scope.tic.Customer.CustomerId
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

      var DateCreatedT = new Date();

      $http({
        url:'http://localhost:5000/api/Ticket',
        method: 'POST',
        data: JSON.stringify({
            Title: $scope.tic.Title,
            Description: $scope.tic.Description,
            TtypeId: $scope.tic.TtypeId,
            PriorityId: $scope.tic.PriorityId,
            CustomerId: $scope.tic.Customer.CustomerId,
            DateCreatedT: DateCreatedT,
            Customer: null,
            Priority: null,
            Ttype: null,
            Comments: null
          })
      })
      // .error(tic => console.log('FAIL', tic))
      .success(tic => console.log('201 Created', tic))
      .then(function() {
         $location.path("/tickets")
      })
    };

/////////////////
// ticket comments
/////////////////

    $scope.addComment = function (id) {
      $http({
        method: 'GET',
        url:`http://localhost:5000/api/Ticket/${id}`
      })
      .success( function(tic) {
        $scope.$parent.tic = tic[0];   
      })
      .then(function() {
        $location.path("/add-comment")
      })
    }

    // delete comment
    $scope.deleteComment = function () {
      
    };

  }
]);