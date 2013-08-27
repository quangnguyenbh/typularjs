/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>

module click {
    export class WebsiteListCtrl {
        private websites: WebsiteItem[];
        message: string = "Hello controller ";
        constructor(
            data: IDataService<click.WebsiteItem>,
            $scope : IWebsiteScope
        ) {
            this.websites = data.listAll().lists;            
            $scope.websites = this.websites;
            $scope.vm = this;  
            $scope.message = "Hello moto" ;          
            console.log("abc"); 
        }
        public injection(): any[] {
            return [   
                "$scope",
                "$routeParams",
                WebsiteListCtrl
            ]
        } 

    }

}