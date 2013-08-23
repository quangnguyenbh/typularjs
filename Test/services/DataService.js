/// <reference path="../models/ZoneItem.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
var click;
(function (click) {
    var ClientDataService = (function () {
        function ClientDataService() {
            this._items = [];
        }
        ClientDataService.prototype.save = function (item) {
            return this._items.push(item);
        };

        ClientDataService.prototype.load = function (id) {
            this._items.forEach(function (t) {
                if (t.id == id) {
                    return t;
                }
            });
            return null;
        };
        ClientDataService.prototype.update = function (item) {
        };

        ClientDataService.prototype.list = function (from, count) {
            return {
                list: [
                    new click.WebsiteItem(1, "baomoi.com", 1, 0.3, "chinhnc"),
                    new click.WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc")
                ],
                total: 2
            };
        };

        ClientDataService.prototype.listAll = function () {
            return {
                list: [
                    new click.WebsiteItem(1, "baomoi.com", 1, 0.3, "chinhnc"),
                    new click.WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc")
                ],
                total: 2
            };
        };
        return ClientDataService;
    })();
    click.ClientDataService = ClientDataService;
})(click || (click = {}));
//# sourceMappingURL=DataService.js.map
