'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ui.router',
    'sasrio.angular-material-sidenav',
    'mwl.calendar',
    'ui.bootstrap',
    'signature'
]).config([
    '$mdThemingProvider',
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    'ssSideNavSectionsProvider',
    function ($mdThemingProvider,
              $locationProvider,
              $urlRouterProvider,
              $stateProvider,
              ssSideNavSectionsProvider) {

        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue', {
                'default': '700'
            });

        $urlRouterProvider.otherwise(function () {
            return '/';
        });

        $stateProvider.state({
            name: 'common',
            abstract: true,
            templateUrl: 'app/views/_common.html',
            controller: 'CommonCtrl'
        });

        $stateProvider.state({
            name: 'common.home',
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'CalendarCtrl as vm'
        });

        $stateProvider.state({
            name: 'common.SearchCust',
            url: '/searchCustomer',
            templateUrl: 'app/views/searchCustomer.html',
            controller: 'SearchCustCtrl as ctrl'
        });

        $stateProvider.state({
            name: 'common.createCust',
            url: '/createCustomer',
            templateUrl: 'app/views/addCustomer.html',
            controller: "CreateCustCtrl"
        });

        $stateProvider.state({
            name: 'common.signature',
            url: '/signature',
            templateUrl: 'app/views/signature.html',
            controller: 'SignatureCtrl'
        });


        ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
        ssSideNavSectionsProvider.initWithSections([
            {
                id: 'link_3',
                name: 'Kalender',
                state: 'common.home',
                type: 'link'
            }, {
                id: 'link_1',
                name: 'Søg kunde',
                state: 'common.SearchCust',
                type: 'link'
            }, {
                id: 'link_2',
                name: 'Opret kunde',
                state: 'common.createCust',
                type: 'link'
            }, {
                id: 'link_4',
                name: 'Underskriv',
                state: 'common.signature',
                type: 'link'
            }
        ]);
    }
]);
