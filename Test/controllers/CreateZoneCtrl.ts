/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../libs/angular/angular-ui-router.js"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>


module click {
    'use strict';

    export class CreateBannerZoneCtrl {
        
        private scope: IWebsiteScope;
        webid: number;
        zoneService: click.ZoneDataService<click.ZoneItem>;

        constructor(
            zoneService: click.ZoneDataService<click.ZoneItem>,
            $scope: IZoneScope,
            $stateParams,
            $location : ng.ILocationService,
            $timeout: ng.ITimeoutService
        ) {
                console.log("createBannerZoneCtrl constructor");
                this.zoneService = zoneService;
                $scope.addZone = () => this.save($scope, $location, $timeout, $stateParams);
                $scope.curWebsite = this.webid = $stateParams.id; 
        }
                        
        save($scope, $location, $timeout, $stateParams) {
            console.log("save : " + $scope.zone);
            var a = new click.BannerZoneItem();
            a.id = 1;
            a.websiteId = $stateParams.id;
            a.name = $scope.zone.name; 
            a.minCPCprice = $scope.zone.minCPCPrice;
            a.minCPMprice = $scope.zone.minCPMPrice;
            a.categories = [];
                       
            this.zoneService.save(a);
            $timeout(function () {
                $location.path("/website/" + $stateParams.id);
            });
        }
    }
    export class CreateVideoZoneCtrl {
        constructor(
            zoneService: click.ZoneDataService<click.ZoneItem>,
            $scope: IZoneScope,
            $stateParams,
            $location: ng.ILocationService,
            $timeout: ng.ITimeoutService
         ) {
            console.log("createVideoZoneCtrl constructor");
            $scope.addZone = () => this.save(zoneService,$scope, $location, $timeout, $stateParams);
            $scope.curWebsite = $stateParams.id;
        }
        save(zoneService : click.ZoneDataService<click.ZoneItem> ,$scope, $location, $timeout, $stateParams) {
            console.log($scope.zone);
            var a = new click.VideoZoneItem();
            var type: string = $scope.zone.itemType;
            console.log('type = ' + type);
            a.name = $scope.zone.name;
            a.websiteId = $stateParams.id;
            if (type == 'banner') {
                console.log('its a banner type');
            }
            if(type == 'tvc') {
                console.log('its a tvc type');
            }
            zoneService.save(a);
            $timeout(function () {
                $location.path('/website/' + $stateParams.id);
            });
        }
    }

    export class createZoneGroupCtrl {

        constructor(
            zoneGroup: IZoneGroupService,
            zoneService: click.ZoneDataService<ZoneItem>,
            $scope: IZoneGroupScope,
            $timeout : ng.ITimeoutService,
            $location : ng.ILocationService,
            $stateParams) {

                console.log("create zone group controller of website : " + $stateParams.id);
                //$scope.items = zone.listAll().lists;
                $scope.curWebsite = $stateParams.id;
                $scope.items = zoneService.listZoneOfWebsite($stateParams.id).lists;
                console.log($scope.items);
                $scope.zgroup = new ZoneGroup();
                $scope.selectedZones = [];
                $scope.selectZone = (name: string) => {
                    console.log(name);
                    $scope.items.forEach(function (z: ZoneItem) {
                        if (name == z.name) {
                            var alreadyAdded = false;
                            $scope.selectedZones.forEach(function (sz: ZoneItem) {
                                if (name == sz.name) {
                                    alreadyAdded = true;
                                }
                            });
                            if (!alreadyAdded) {
                                $scope.selectedZones.push(z);
                            }
                        }
                        });
                        console.log($scope.selectedZones);
                };

            $scope.removeSelectedZone = (name: string) => {
                var i = $scope.selectedZones.length;
                while (i--) {
                    if ($scope.selectedZones[i]['name'] == name) {
                        $scope.selectedZones.splice(i, 1);
                    }
                }
            }

                $scope.removeAllSelected = () => {
                $scope.selectedZones = [];
            }

                $scope.addZoneGroup = () => this.addZoneGroup(zoneGroup,$scope, $stateParams,$timeout, $location);

                $scope.isClean = () => {
                console.log("is clean function called : " + $scope.zgroup.name);
                if ($scope.zgroup.name == '') {
                    return true;
                }
                return false;
            }
        }
        addZoneGroup(zoneGroup, $scope,$stateParams, $timeout, $location) {
            var zoneg = new ZoneGroup();
            zoneg.name = $scope.zgroup.name;
            zoneg.websiteId = $stateParams.id;
            zoneg.zones = $scope.selectedZones;
            
            zoneGroup.save(zoneg);
            $timeout(function () {
                $location.path('/website/' + $stateParams.id);
            });
        }

    }

}