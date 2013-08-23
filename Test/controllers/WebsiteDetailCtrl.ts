/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
module click {
    export class WebsiteDetailCtrl {
        private website: WebsiteItem;

        constructor(data: IDataService<WebsiteItem>) {

        }
    }

}