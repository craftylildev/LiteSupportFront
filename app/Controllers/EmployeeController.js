"use strict";

LiteSupport.controller('EmployeeController', [
  '$http', 
  '$scope',
  '$location',

  function ($http, $scope, $location) {

    $scope.employees = [];

    //Get employee list and department
    $http
      .get('http://localhost:5000/api/Employee')
      .success(emp => $scope.employees = emp);

    $http
      .get('http://localhost:5000/api/Department')
      .success(dep => $scope.departments = dep);

    // add new employee
    $scope.addEmployee = function () {
      $http({
        url:'http://localhost:5000/api/Employee',
        method: 'POST',
        data: JSON.stringify({
            FirstNameE: $scope.emp.FirstNameE,
            LastNameE: $scope.emp.LastNameE,
            Username: $scope.emp.Username,
            EmailE: $scope.emp.EmailE,
            PhoneE: $scope.emp.PhoneE,
            DepartmentId: $scope.emp.DepartmentId
          })
      })
      .success(emp => console.log('201 Created', emp))
      .then(function() {
         $location.path("/employees")
      })
    };

    // view employee details
    $scope.detailEmployee = function (id) {
      // console.log(id);
      $http({
        method: 'GET',
        url:`http://localhost:5000/api/Employee/${id}`
      })
      .success( function(emp) {
        $scope.$parent.emp = emp[0];
      })
      .then(function() {
        $location.path("/details-employee")
      })
    }

    // edit employee details
    $scope.editEmployee = function (id) {
       console.log("id",id);
       $http({
          method: 'GET',
          url:`http://localhost:5000/api/Employee/${id}`
        })
      .success( function(emp) {
           // console.log("emp", emp);
          $scope.$parent.emp = emp[0];        
      })
      .then(function() {
          $location.path("/edit-employee")
      })
    }

    // save changes to edit employee
  $scope.saveEmployee = function (id) {
      // console.log("id", id);
      $http({
        url:`http://localhost:5000/api/Employee/${id}`,
        method: 'PUT',
        data: JSON.stringify({
            EmployeeId: $scope.emp.EmployeeId,
            FirstNameE: $scope.emp.FirstNameE,
            LastNameE: $scope.emp.LastNameE,
            Username: $scope.emp.Username,
            EmailE: $scope.emp.EmailE,
            PhoneE: $scope.emp.PhoneE,
            DepartmentId: $scope.emp.DepartmentId
          })
      })
      .success( function(emp) {
          $scope.$parent.emp = emp;        
      })
      .then(function() {
         $location.path("/employees")
      })
    };

  }
]);