/// <reference path="libs/angular-1.0.d.ts"/>
/// <reference path="services/DataService.ts"/>
/// <reference path="models/WebsiteItem.ts"/>
/// <reference path="controllers/WebsiteListCtrl.ts"/>

var app = angular.module("click", []) ;
app.service("data", () => new click.ClientDataService())
    .controller('createWebsiteCtrl', click.CreateWebsiteCtrl)
    .controller('websiteListCtrl', click.WebsiteListCtrl.prototype.injection())
    .controller('websiteDetailCtrl', click.WebsiteDetailCtrl)
    .config(['$routeProvider', function($routeProvicer) {
        $routeProvicer
            .when('/', { templateUrl: 'default.html', controller: click.WebsiteListCtrl })
            .when('/websites', { templateUrl: 'listWebsites.html', controller: click.WebsiteListCtrl })
            .when('/websites/:webid', { templateUrl: 'webDetail.html', controller: click.WebsiteDetailCtrl })
            .when('/websites/create', { templateUrl: 'createwebsite.html', controller: click.WebsiteDetailCtrl })
            .otherwise({ redirectTo: '/' });
    }])
;

 
