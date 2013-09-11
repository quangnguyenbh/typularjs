/// <reference path="../models/ZoneItem.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var click;
(function (click) {
    var ClientDataService = (function () {
        function ClientDataService() {
            this._items = [];
        }
        ClientDataService.prototype.init = function () {
            //var a =  new click.WebsiteItem(1, "baomoi.com", 1, 0.3, "chinhnc", "baomoi.com", "baomoi des");
            //var b = new click.WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc", "zing", "zing des");
            //this._items.push(a);
            //this._items.push(b);
        };

        ClientDataService.prototype.save = function (item) {
            console.log("save item ...");
            return this._items.push(item);
        };

        ClientDataService.prototype.load = function (id) {
            var ret = null;
            this._items.forEach(function (t) {
                if (t.id == id) {
                    return t;
                }
            });
            return ret;
        };
        ClientDataService.prototype.update = function (item) {
        };

        ClientDataService.prototype.list = function (from, count) {
            return {
                lists: new Array(),
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
    var ZoneGroupService = (function (_super) {
        __extends(ZoneGroupService, _super);
        function ZoneGroupService() {
            _super.apply(this, arguments);
        }
        ZoneGroupService.prototype.listZoneGroupOfWebsite = function (websiteId) {
            var ret = [];
            this._items.forEach(function (z) {
                if (z.websiteId == websiteId) {
                    ret.push(z);
                }
            });
            return {
                lists: ret,
                total: ret.length
            };
        };
        return ZoneGroupService;
    })(ClientDataService);
    click.ZoneGroupService = ZoneGroupService;
    var ZoneDataService = (function () {
        function ZoneDataService() {
            this.zones = [];
        }
        ZoneDataService.prototype.load = function (id) {
            return null;
        };
        ZoneDataService.prototype.save = function (item) {
            console.log("save item....");
            this.zones.push(item);
        };

        ZoneDataService.prototype.listZoneOfWebsite = function (websiteId) {
            var ret = [];
            this.zones.forEach(function (z) {
                if (z.websiteId == websiteId) {
                    ret.push(z);
                }
            });
            return {
                lists: ret,
                total: ret.length
            };
        };
        return ZoneDataService;
    })();
    click.ZoneDataService = ZoneDataService;
})(click || (click = {}));
//# sourceMappingURL=DataService.js.map
