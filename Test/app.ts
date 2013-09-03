/// <reference path="libs/angular-1.0.d.ts"/>
/// <reference path="services/DataService.ts"/>
/// <reference path="models/WebsiteItem.ts"/>
/// <reference path="controllers/WebsiteListCtrl.ts"/>
/// <reference path="controllers/MainController.ts"/>

var app = angular.module("click", ['ui.state']);

console.log("app starting ...");

app.service("data", () => new click.ClientDataService<click.WebsiteItem>())
    .service('zoneGroup', () => new click.ZoneGroupService())
    .service('zone', () => new click.ClientDataService<click.ZoneItem>())
    .service('zoneService', () => new click.ZoneDataService<click.ZoneItem>())
//.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.convert('num', function () {
//        console.log("convert num ...");
//        return {
//            parse: function (param) {
//                var accepts = !isNaN(param);
//                return {
//                    accept: accepts,
//                    value: accepts ? Number(param) : 0
//                };
//            },
//            format: function (value) {
//                if (isNaN(value)) {
//                    throw new Error("Not a number");
//                }
//                return value.toString();
//            }
//        };
//    })
//}])
    //.config(['$routeProvider', function ($routeProvider) {
    //    $routeProvider
    //        .when('/', { templateUrl: 'welcome.html', controller: click.MainController })
    //        .when('/websites', { templateUrl: 'listWebsites.html', controller: click.WebsiteListCtrl })
    //        .when('/website/:id', { templateUrl: 'websiteDetail.html', controller: click.WebsiteDetailCtrl })
    //        .when('/websites/create', { templateUrl: 'createwebsite.html', controller: click.CreateWebsiteCtrl })
    //        .otherwise({ redirectTo: '/' });
    //    console.log("after config");
    //}])
    
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            
            .state('home', {
                url: '/',
                views: {
                    "content": {
                        templateUrl: 'welcome.html',
                        controller: 'click.MainController'
                    }
                }                
            })
            .state('websites', {
                url: '/websites',
                views: {
                    "content": {
                        templateUrl: 'listWebsites.html',
                        controller: 'click.WebsiteListCtrl'
                    }
                }                
            })
            .state('create', {
                url: '/websites/create',
                views: {
                    "content": {
                        templateUrl: 'createwebsite.html',
                        controller: click.CreateWebsiteCtrl
                    }
                }
                
            })
            .state('detail', {
                url: '/website/:id',
                views: {
                    "content": {
                        templateUrl: 'websiteDetail.html',
                        controller: click.WebsiteDetailCtrl
                    }
                }

            })
            .state('newbannerzone', {
                url: '/website/:id/newbannerzone',
                views: {
                    "content": {
                        templateUrl: 'createBannerZone.html',
                        controller: click.CreateBannerZoneCtrl
                    }
                }

            })
            .state('newvideozone', {
                url: '/website/:id/newvideozone',
                views: {
                    "content": {
                        templateUrl: 'createVideoZone.html',
                        controller: click.CreateVideoZoneCtrl
                    }
                }
            })
            .state('newzonegroup', {
                url: '/website/:id/newzonegroup',
                views: {
                    "content": {
                        templateUrl: 'createZoneGroup.html',
                        controller: click.createZoneGroupCtrl
                    }
                }
            })
        ;
    }]);

/* ================================================
 * Directives definition
 * ================================================
 */

app.directive('quDirective', function () {
    return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                console.log("recognize directive qu-directive");

            }
        }
    }
);

app.run(function ($state) {
    $state.transitionTo('home');
});


    
;

 
