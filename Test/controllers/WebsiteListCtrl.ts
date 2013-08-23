/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>

module click {
    export class WebsiteListCtrl {
        private websites: WebsiteItem[];
        
        constructor(
            data: IDataService<WebsiteItem>,
            $scope : IWebsiteScope
        ) {
            this.websites = data.listAll().list ;
            $scope.websites = this.websites;
        }
        public injection(): any[] {
            return [   
                '$scope',
                WebsiteListCtrl
            ]
        } 

    }

}