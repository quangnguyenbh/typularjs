/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
var click;
(function (click) {
    var CreateVideoZoneCtrl = (function () {
        function CreateVideoZoneCtrl(data, $scope, $stateParams, $location, $timeout) {
            var _this = this;
            this.dataService = data;
            this.scope = $scope;
            this.scope.addWebsite = function () {
                return _this.save($scope, $location, $timeout);
            };
        }
        CreateVideoZoneCtrl.prototype.save = function ($scope, $location, $timeout) {
        };
        return CreateVideoZoneCtrl;
    })();
    click.CreateVideoZoneCtrl = CreateVideoZoneCtrl;
})(click || (click = {}));
//# sourceMappingURL=CreateVideoZoneCtrl.js.map
