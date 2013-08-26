/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
/// <reference path="../interfaces/IWebsiteScope.ts"/>
module click {
    export class MainController {
        
        constructor(data: IDataService<click.WebsiteItem>, $scope : click.IWebsiteScope) {
            $scope.message = "Welcome to my site";
        }
    }

}