var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Item = (function () {
    function Item(id) {
        this.id = id;
    }
    return Item;
})();

// Module
var click;
(function (click) {
    // Class
    var ZoneItem = (function (_super) {
        __extends(ZoneItem, _super);
        function ZoneItem() {
            _super.apply(this, arguments);
        }
        return ZoneItem;
    })(Item);
    click.ZoneItem = ZoneItem;
})(click || (click = {}));
//# sourceMappingURL=ZoneItem.js.map
