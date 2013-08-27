/// <reference path="libs/angular-1.0.d.ts"/>
/// <reference path="services/DataService.ts"/>
/// <reference path="models/WebsiteItem.ts"/>
/// <reference path="controllers/WebsiteListCtrl.ts"/>
/// <reference path="controllers/MainController.ts"/>

var app = angular.module("click", []);

console.log("app starting ...");

app.service("data", () => new click.ClientDataService<click.WebsiteItem>())
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'welcome.html', controller: click.MainController })
            .when('/websites', { templateUrl: 'listWebsites.html', controller: click.WebsiteListCtrl })
            //.when('/websites/:webid', { templateUrl: 'webDetail.html', controller: click.WebsiteDetailCtrl })
            .when('/websites/create', { templateUrl: 'createwebsite.html', controller: click.CreateWebsiteCtrl })
            .otherwise({ redirectTo: '/' });
        console.log("after config") ;
    }])
;

 
