/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
var click;
(function (click) {
    var WebsiteListCtrl = (function () {
        function WebsiteListCtrl(data, $scope) {
            this.websites = data.listAll().list;
            $scope.websites = this.websites;
        }
        WebsiteListCtrl.prototype.injection = function () {
            return [
                '$scope',
                WebsiteListCtrl
            ];
        };
        return WebsiteListCtrl;
    })();
    click.WebsiteListCtrl = WebsiteListCtrl;
})(click || (click = {}));
//# sourceMappingURL=WebsiteListCtrl.js.map
