/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
var click;
(function (click) {
    var WebsiteDetailCtrl = (function () {
        function WebsiteDetailCtrl(data) {
        }
        WebsiteDetailCtrl.prototype.injection = function () {
            return ["$scope", WebsiteDetailCtrl];
        };
        return WebsiteDetailCtrl;
    })();
    click.WebsiteDetailCtrl = WebsiteDetailCtrl;
})(click || (click = {}));
//# sourceMappingURL=WebsiteDetailCtrl.js.map
