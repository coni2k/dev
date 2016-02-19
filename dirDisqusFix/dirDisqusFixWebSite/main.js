(function (angular) {
    'use strict';
    angular.module('dirDisqusFix', ['ngRoute', 'angularUtils.directives.dirDisqus'])

     .controller('MainController', function ($scope, $location) {

         $scope.disqusShortname = 'wealtheconomy';
         $scope.disqusId = 'dirDisqusFix' + $location.path().replace(/\//g, '_');
         $scope.disqusUrl = $location.absUrl().substring(0, $location.absUrl().length - $location.url().length + $location.path().length);
         $scope.disqusLoaded = false; // Boolean
         $scope.disqusLoadedOn = null; // DateTime

         $scope.$on('$routeChangeSuccess', function (event, current, previous) {

             // Load related disqus comments when the view changes
             $scope.disqusId = 'dirDisqusFix' + $location.path().replace(/\//g, '_');
             $scope.disqusUrl = $location.absUrl().substring(0, $location.absUrl().length - $location.url().length + $location.path().length);

             // Boolean
             $scope.disqusLoaded = null; // Trying to change the value to null first but still doesn't work
             $scope.disqusLoaded = true;

             // DateTime
             $scope.disqusLoadedOn = new Date();

             // Log
             console.log('main.js' +
                 ' - disqusId: ' + $scope.disqusId +
                 ' - disqusUrl: ' + $scope.disqusUrl +
                 ' - disqusLoaded: ' + $scope.disqusLoaded +
                 ' - disqusLoadedOn: ' + $scope.disqusLoadedOn);
         });
     })

    .config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/default_boolean.aspx', { templateUrl: 'home.html' })
            .when('/default_datetime.aspx', { templateUrl: 'home.html' })
            .when('/default_without.aspx', { templateUrl: 'home.html' })
            .when('/:key', { templateUrl: function ($routeParams) { return $routeParams.key + '.html' }})
            .otherwise({ redirectTo: '/home' });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });
})(window.angular);
