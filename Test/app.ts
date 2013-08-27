/// <reference path="libs/angular-1.0.d.ts"/>
/// <reference path="services/DataService.ts"/>
/// <reference path="models/WebsiteItem.ts"/>
/// <reference path="controllers/WebsiteListCtrl.ts"/>

var app = angular.module("click", []) ;
app.service("data", () => new click.ClientDataService())
    .controller('websiteListCtrl', click.WebsiteListCtrl.prototype.injection())
    .controller('createWebsiteCtrl', click.CreateWebsiteCtrl)
    .controller('websiteDetailCtrl', click.WebsiteDetailCtrl)
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'default.html', controller: click.WebsiteListCtrl })
            .when('/websites', { templateUrl: 'listWebsites.html', controller: click.WebsiteListCtrl })
            .when('/websites/:webid', { templateUrl: 'webDetail.html', controller: click.WebsiteDetailCtrl })
            .when('/websites/create', { templateUrl: 'createwebsite.html', controller: click.WebsiteDetailCtrl })
            .otherwise({ redirectTo: '/' });
    }])
;

 
