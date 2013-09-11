/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
/// <reference path="../interfaces/IWebsiteScope.ts"/>
module click {
    export class ZoneController {
        website: WebsiteItem;
        constructor(data: IDataService<click.WebsiteItem>, $scope : click.IWebsiteScope) {          
                     
        }

    }

}