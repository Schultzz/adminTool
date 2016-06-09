'use strict';

angular.module('app.login', ['ngRoute'])

.controller('LoginCtrl', function($scope, $location) {


        //Login

        $scope.performLogin = function(){

            console.log("performLogin", "in here");
            $location.path('/Home');

        };


        $scope.header = 'Breelteparken interne website';



    });
