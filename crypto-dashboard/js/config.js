angular.module('cryptoDashboard')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    
    $routeProvider
    .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController'
    })
    .when('/data', {
        templateUrl: 'views/data-table.html',
        controller: 'DataTableController'
    })
    .when('/', {
        redirectTo: '/dashboard'
    })
    .otherwise({
        redirectTo: '/dashboard'
    });
}]);