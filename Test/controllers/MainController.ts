/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
/// <reference path="../interfaces/IWebsiteScope.ts"/>
module click {
    export class MainController {
        static init: boolean = false;
        constructor(
            data: IDataService<click.WebsiteItem>,
            $scope: click.IWebsiteScope,
            zoneService: click.ZoneDataService<click.ZoneItem>,
            zoneGroup: click.IZoneGroupService
        ) {
            console.log("in MainController : constructor") ;
            $scope.message = "Welcome to my site";
            if (!click.MainController.init) {
                data.save(new click.WebsiteItem(1, "baomoi.com", 1, 0.3, "chinhnc", "baomoi.com", "baomoi des"));
                data.save(new click.WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc", "zing", "zing des"));

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
                click.MainController.init = true;
            }
        }
    }

}