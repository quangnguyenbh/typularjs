/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
var click;
(function (click) {
    var CreateWebsiteCtrl = (function () {
        function CreateWebsiteCtrl(data, $scope, $location, $timeout) {
            var _this = this;
            this.dataService = data;
            this.scope = $scope;
            this.scope.addWebsite = function () {
                return _this.save($scope, $location, $timeout);
            };
        }
        CreateWebsiteCtrl.prototype.injection = function () {
            return [
                "$scope",
                CreateWebsiteCtrl
            ];
        };
        CreateWebsiteCtrl.prototype.save = function ($scope, $location, $timeout) {
            console.log("create website");
            console.log($scope.website);
            this.dataService.save($scope.website);
            $timeout(function () {
                $location.path('/websites');
            });
        };
        return CreateWebsiteCtrl;
    })();
    click.CreateWebsiteCtrl = CreateWebsiteCtrl;
})(click || (click = {}));
//# sourceMappingURL=CreateWebsiteCtrl.js.map
