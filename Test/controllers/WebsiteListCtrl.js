/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
var click;
(function (click) {
    var WebsiteListCtrl = (function () {
        function WebsiteListCtrl(data, $scope) {
            this.message = "Hello controller ";
            this.websites = data.listAll().lists;
            $scope.websites = this.websites;
            $scope.vm = this;
            $scope.message = "Hello moto";
            console.log("websites list controller constructor");
            $scope.onSelect = function () {
                console.log($scope.checked);
            };
        }
        return WebsiteListCtrl;
    })();
    click.WebsiteListCtrl = WebsiteListCtrl;
})(click || (click = {}));
//# sourceMappingURL=WebsiteListCtrl.js.map
