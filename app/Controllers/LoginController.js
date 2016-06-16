"use strict";
console.log("test");
LiteSupport.controller('LoginController', [
  '$http', 
  '$scope',
  'AuthFactory',
  '$location',

  function ($http, $scope, authFactory, $location) {

    $scope.githubOauth = function () {
      OAuth.initialize('7yAAt416h_eyY950-20qUTdLNlQ');

      OAuth.popup('github').done(function(result) {
          console.log(result)

        result.me().done(function(data) {
            // do something with `data`, e.g. print data.name
            console.log(data);

            $http({
              url: "http://localhost:5000/api/Employee",
              method: "POST",
              data: JSON.stringify({
                Username: data.alias
              })
            }).then(
            response => {
              let theEmployee = response.data[0];
              authFactory.setUser(theEmployee);
              console.log("resolve fired", theEmployee);
            },
            response => {
              console.log("reject fired", response);

              // Employee has already been created
              if (response.status === 409) {
                $http
                  .get(`http://localhost:5000/api/Employee?username=${data.alias}`)
                  .then(
                    response => {
                      let theEmployee = response.data[0];
                      console.log("Found the Employee", theEmployee);
                      authFactory.setUser(theEmployee)
                    },
                    response => console.log("Could not find that Employee", response)
                  )
              }

            })
            .then(function() {
               $location.path("/")
            })
        })
      });
    };
  }
]);
