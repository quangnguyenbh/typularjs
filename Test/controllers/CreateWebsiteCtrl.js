/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
var click;
(function (click) {
    var CreateWebsiteCtrl = (function () {
        function CreateWebsiteCtrl(data, $scope, $location, $timeout) {
            var _this = this;
            this.dataService = data;
            this.$scope = $scope;
            console.log("create website controller constructor");
            $scope.addWebsite = function () {
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
            var id = this.dataService.listAll().total + 1;

            console.log("id : " + id + ",url:" + $scope.website.URL + ",reviewType:" + $scope.website.reviewType + ", owner :" + $scope.website.owner + ", name:" + $scope.website.name + ", des : " + $scope.website.description);

            //var a = new click.WebsiteItem(id,
            //    $scope.website.URL,
            //    $scope.website.reviewType,
            //    0.3,
            //    $scope.website.owner,
            //    $scope.website.name,
            //    $scope.website.description);
            $scope.website.id = id;

            //console.log(a);
            //console.log('id = ' + a.id);
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
