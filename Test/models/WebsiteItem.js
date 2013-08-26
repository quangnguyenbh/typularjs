var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var click;
(function (click) {
    var Item = (function () {
        function Item(id) {
            this.id = id;
        }
        return Item;
    })();
    click.Item = Item;

    var WebsiteItem = (function (_super) {
        __extends(WebsiteItem, _super);
        function WebsiteItem(id, url, reviewType, usage, owner, name, des) {
            _super.call(this, id);
            this.URL = url;
            this.name = name;
            this.reviewType = reviewType;
            this.usage = usage;
            this.owner = owner;
            this.description = des;
        }
        return WebsiteItem;
    })(Item);
    click.WebsiteItem = WebsiteItem;
})(click || (click = {}));
//# sourceMappingURL=WebsiteItem.js.map
