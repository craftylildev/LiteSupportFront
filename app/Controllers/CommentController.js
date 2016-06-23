"use strict";

LiteSupport.controller('CommentController', [
  '$http', 
  '$scope',
  '$location',

  function ($http, $scope, $location) {

    $scope.comments = [];

    $http
      .get('http://localhost:5000/api/Comment')
      // .success(com => console.log("com", com)); 
      .success(com => $scope.comments = com);   

    $http
      .get('http://localhost:5000/api/Employee')
      // .success(emp => console.log("emp", emp)); 
      .success(emp => $scope.employees = emp);   



    // save comment to comment table
    $scope.saveComment = function (id) {
      
      // console.log("id", id);
      var ticketId = id;
      console.log(ticketId);
     // console.log("$scope.tic.TicketId", $scope.tic.TicketId);

      var DateCreatedC = new Date();
      
      $http({
        url:'http://localhost:5000/api/Comment',
        method: 'POST',
        data: JSON.stringify({
            CommentMsg: $scope.tic.CommentMsg,
            EmployeeId: $scope.tic.Comment.EmployeeId,            
            DateCreatedC: DateCreatedC,
            TicketId: ticketId

          })
      })
      // .error(com => console.log('FAIL', com))
      .success(com => console.log('201 Created', com))
      .then(function() {
         $location.path("/tickets")
      })
    };

  }
]);