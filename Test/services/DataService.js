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
                lists: [
                    new click.WebsiteItem(1, "baomoi.com", 1, 0.3, "chinhnc", "baomoi", "baomoi'des"),
                    new click.WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc", "zing", "zing des")
                ],
                total: 2
            };
        };

        ClientDataService.prototype.listAll = function () {
            return {
                lists: this._items,
                total: this._items.length
            };
        };
        return ClientDataService;
    })();
    click.ClientDataService = ClientDataService;
})(click || (click = {}));
//# sourceMappingURL=DataService.js.map
