/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>


module click {
    export class CreateWebsiteCtrl {
        private website: WebsiteItem;
        private dataService: IDataService<click.WebsiteItem>;
        private scope: IWebsiteScope;

        constructor(data: IDataService<click.WebsiteItem> ,$scope : IWebsiteScope, $location, $timeout) {
            this.dataService = data;
            this.scope = $scope;
            this.scope.addWebsite = () => this.save($scope,$location,$timeout);
        }

        public injection() {
            return [
                "$scope",CreateWebsiteCtrl
            ];
        }
        save($scope, $location, $timeout) {
            console.log("create website");
            console.log($scope.website);
            this.dataService.save($scope.website);
            $timeout(function () { $location.path('/websites'); });
        }
    }

}