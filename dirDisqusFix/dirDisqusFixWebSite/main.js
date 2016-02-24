(function (angular) {
    'use strict';
    angular.module('dirDisqus', ['ngRoute', 'angularUtils.directives.dirDisqus'])

     .controller('MainController', function ($scope, $location, $timeout) {

         // Mode: sync | async | routeChange
         // Set default, if not correct
         var mode = $location.search().mode;
         if (mode !== 'sync' && mode !== 'async' && mode !== 'route') {
             mode = 'sync'; 
         }

         // Mode text
         $scope.modeText = '';
         switch (mode) {
             case 'sync': $scope.modeText = 'sync - load directly'; break;
             case 'async': $scope.modeText = 'async - wait 2 sec before loading'; break;
             case 'route': $scope.modeText = 'route - load on route changes'; break;
         }

         // Initial settings for disqus
         $scope.disqusConfig = {
             disqus_shortname: 'wealtheconomy',
             disqus_on_ready: function () {
                 console.log('on ready callback')
             }
         };

         // Mode sync
         if (mode === 'sync') {
             $scope.disqusConfig.disqus_identifier = getId();
             $scope.disqusConfig.disqus_url = getUrl();
         }

         // Mode async
         if (mode === 'async') {
             $timeout(function () {
                 $scope.disqusConfig.disqus_identifier = getId();
                 $scope.disqusConfig.disqus_url = getUrl();
             }, 2000);
         }

         // Mode routeChange
         $scope.$on('$routeChangeSuccess', function (event, current, previous) {
             if (mode === 'route') {
                 $scope.disqusConfig.disqus_identifier = getId();
                 $scope.disqusConfig.disqus_url = getUrl();
             }
         });

         function getId() {
             return 'dirDisqusFix' + $location.path().replace(/\//g, '_');
         }

         function getUrl() {
             return $location.absUrl().substring(0, $location.absUrl().length - $location.url().length + $location.path().length);
         }
     })

    .config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/default.aspx', { templateUrl: 'home.html' })
            .when('/:key', { templateUrl: function ($routeParams) { return $routeParams.key + '.html' }})
            .otherwise({ redirectTo: '/home' });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });
})(window.angular);
