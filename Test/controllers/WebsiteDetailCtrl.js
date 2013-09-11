/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
var click;
(function (click) {
    var WebsiteDetailCtrl = (function () {
        function WebsiteDetailCtrl(zoneService, zoneGroup, $scope, $stateParams) {
            if (!WebsiteDetailCtrl.init) {
                zoneService.zones = [
                    { id: 1, name: "TopLeft", websiteId: 1, zoneGroups: [] },
                    { id: 2, name: "TopRight", websiteId: 1, zoneGroups: [] },
                    { id: 3, name: "TopCenter", websiteId: 1, zoneGroups: [] },
                    { id: 4, name: "Left1", websiteId: 1, zoneGroups: [] },
                    { id: 5, name: "Left2", websiteId: 1, zoneGroups: [] },
                    { id: 6, name: "TopLeft", websiteId: 2, zoneGroups: [] },
                    { id: 7, name: "TopRight", websiteId: 2, zoneGroups: [] },
                    { id: 8, name: "TopCenter", websiteId: 2, zoneGroups: [] },
                    { id: 9, name: "LeftTop", websiteId: 2, zoneGroups: [] }
                ];
                WebsiteDetailCtrl.init = true;
            }
            var wid = $stateParams.id;
            console.log("wid = " + wid);
            $scope.curWebsite = wid;
            $scope.zones = zoneService.listZoneOfWebsite($stateParams.id).lists;
            $scope.zoneGroups = zoneGroup.listZoneGroupOfWebsite($stateParams.id).lists;
        }
        WebsiteDetailCtrl.init = false;
        return WebsiteDetailCtrl;
    })();
    click.WebsiteDetailCtrl = WebsiteDetailCtrl;
})(click || (click = {}));
//# sourceMappingURL=WebsiteDetailCtrl.js.map
