"use strict";

LiteSupport.factory('AuthFactory', [
   '$http',

   function ($http) {
       let currentUser = null;
       return {
           getUser () {
               return currentUser;
           },

           setUser (user) {
               currentUser = user;
           }
       }
   }
])