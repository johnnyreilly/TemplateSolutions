interface configRoute {
    url: string;
    config: configRouteConfig;
}

interface configRouteConfig extends ng.route.IRoute {
    title: string;
    settings: {
        nav: number;
        content: string;
    };
}

(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider: ng.route.IRouteProvider, routes: configRoute[]) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes(): configRoute[] {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/sages',
                config: {
                    title: 'sages',
                    templateUrl: 'app/sages/sages.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-users"></i> Sages'
                    }
                }
            }, {
                url: '/admin',
                config: {
                    title: 'admin',
                    templateUrl: 'app/admin/admin.html',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            }
        ];
    }
})();