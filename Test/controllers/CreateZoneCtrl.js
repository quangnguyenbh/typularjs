/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../libs/angular/angular-ui-router.js"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
var click;
(function (click) {
    'use strict';

    var CreateBannerZoneCtrl = (function () {
        function CreateBannerZoneCtrl(zoneService, $scope, $stateParams, $location, $timeout) {
            var _this = this;
            console.log("createBannerZoneCtrl constructor");
            this.zoneService = zoneService;
            $scope.addZone = function () {
                return _this.save($scope, $location, $timeout, $stateParams);
            };
            $scope.curWebsite = this.webid = $stateParams.id;
        }
        CreateBannerZoneCtrl.prototype.save = function ($scope, $location, $timeout, $stateParams) {
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
        };
        return CreateBannerZoneCtrl;
    })();
    click.CreateBannerZoneCtrl = CreateBannerZoneCtrl;
    var CreateVideoZoneCtrl = (function () {
        function CreateVideoZoneCtrl(zoneService, $scope, $stateParams, $location, $timeout) {
            var _this = this;
            console.log("createVideoZoneCtrl constructor");
            $scope.addZone = function () {
                return _this.save(zoneService, $scope, $location, $timeout, $stateParams);
            };
            $scope.curWebsite = $stateParams.id;
        }
        CreateVideoZoneCtrl.prototype.save = function (zoneService, $scope, $location, $timeout, $stateParams) {
            console.log($scope.zone);
            var a = new click.VideoZoneItem();
            var type = $scope.zone.itemType;
            console.log('type = ' + type);
            a.name = $scope.zone.name;
            a.websiteId = $stateParams.id;
            if (type == 'banner') {
                console.log('its a banner type');
            }
            if (type == 'tvc') {
                console.log('its a tvc type');
            }
            zoneService.save(a);
            $timeout(function () {
                $location.path('/website/' + $stateParams.id);
            });
        };
        return CreateVideoZoneCtrl;
    })();
    click.CreateVideoZoneCtrl = CreateVideoZoneCtrl;

    var createZoneGroupCtrl = (function () {
        function createZoneGroupCtrl(zoneGroup, zoneService, $scope, $timeout, $location, $stateParams) {
            var _this = this;
            console.log("create zone group controller of website : " + $stateParams.id);

            //$scope.items = zone.listAll().lists;
            $scope.curWebsite = $stateParams.id;
            $scope.items = zoneService.listZoneOfWebsite($stateParams.id).lists;
            console.log($scope.items);
            $scope.zgroup = new click.ZoneGroup();
            $scope.selectedZones = [];
            $scope.selectZone = function (name) {
                console.log(name);
                $scope.items.forEach(function (z) {
                    if (name == z.name) {
                        var alreadyAdded = false;
                        $scope.selectedZones.forEach(function (sz) {
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

            $scope.removeSelectedZone = function (name) {
                var i = $scope.selectedZones.length;
                while (i--) {
                    if ($scope.selectedZones[i]['name'] == name) {
                        $scope.selectedZones.splice(i, 1);
                    }
                }
            };

            $scope.removeAllSelected = function () {
                $scope.selectedZones = [];
            };

            $scope.addZoneGroup = function () {
                return _this.addZoneGroup(zoneGroup, $scope, $stateParams, $timeout, $location);
            };

            $scope.isClean = function () {
                console.log("is clean function called : " + $scope.zgroup.name);
                if ($scope.zgroup.name == '') {
                    return true;
                }
                return false;
            };
        }
        createZoneGroupCtrl.prototype.addZoneGroup = function (zoneGroup, $scope, $stateParams, $timeout, $location) {
            var zoneg = new click.ZoneGroup();
            zoneg.name = $scope.zgroup.name;
            zoneg.websiteId = $stateParams.id;
            zoneg.zones = $scope.selectedZones;

            zoneGroup.save(zoneg);
            $timeout(function () {
                $location.path('/website/' + $stateParams.id);
            });
        };
        return createZoneGroupCtrl;
    })();
    click.createZoneGroupCtrl = createZoneGroupCtrl;
})(click || (click = {}));
//# sourceMappingURL=CreateZoneCtrl.js.map
