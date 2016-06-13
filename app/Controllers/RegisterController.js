"use strict";

NotDolls.controller('RegisterController', [
  '$http', 
  '$scope',
  'AuthFactory',

  function ($http, $scope, authFactory) {

    $scope.githubOauth = function () {
      OAuth.initialize('7yAAt416h_eyY950-20qUTdLNlQ');

      OAuth.popup('github').done(function(result) {
          console.log(result)

        result.me().done(function(data) {
            // do something with `data`, e.g. print data.name
            console.log(data);

            $http({
              url: "http://localhost:5000/api/Customer",
              method: "POST",
              data: JSON.stringify({
                username: data.alias,
                location: data.location,
                emailAddress: data.email,
                createdDate: new Date()
              })
            }).then(
            response => {
              let theCustomer = response.data[0];
              authFactory.setUser(theCustomer);
              console.log("resolve fired", theCustomer);
            },
            response => {
              console.log("reject fired", response);

              // Customer has already been created
              if (response.status === 409) {
                $http
                  .get(`http://localhost:5000/api/Customer?username=${data.alias}`)
                  .then(
                    response => {
                      let theCustomer = response.data[0];
                      console.log("Found the Customer", theCustomer);
                      authFactory.setUser(theCustomer)
                    },
                    response => console.log("Could not find that Customer", response)
                  )
              }

            }
            )
        })
      });
    };
  }
]);
