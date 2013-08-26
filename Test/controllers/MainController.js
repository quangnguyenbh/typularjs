/// <reference path="../libs/angular-1.0.d.ts"/>
/// <reference path="../services/DataService.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
/// <reference path="../interfaces/IWebsiteScope.ts"/>
var click;
(function (click) {
    var MainController = (function () {
        function MainController(data, $scope) {
            $scope.message = "Welcome to my site";
        }
        return MainController;
    })();
    click.MainController = MainController;
})(click || (click = {}));
//# sourceMappingURL=MainController.js.map
