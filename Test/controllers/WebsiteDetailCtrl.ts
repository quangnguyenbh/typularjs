/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
module click {
    export class WebsiteDetailCtrl {
        private website: WebsiteItem;
        zones: ZoneItem[];
        static init: boolean = false;
        constructor(
            data : click.IDataService<click.WebsiteItem>,
            zoneService: click.ZoneDataService<click.ZoneItem>,
            zoneGroup: click.IZoneGroupService,
            $scope: click.IWebsiteScope, $stateParams
         ) {
             console.log("websiteDetail constructor");
            var wid = $stateParams.id;
             console.log("wid = " + wid);
             $scope.website = data.load(wid);
             console.log($scope.website);
            $scope.curWebsite = wid;
            $scope.zones = zoneService.listZoneOfWebsite($stateParams.id).lists;
            $scope.zoneGroups = zoneGroup.listZoneGroupOfWebsite($stateParams.id).lists;
        }

    }

}