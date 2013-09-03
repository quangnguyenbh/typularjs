var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="WebsiteItem.ts"/>
// Module
var click;
(function (click) {
    'use strict';

    var TypeItem = (function () {
        function TypeItem(code, name) {
            this.code = code;
            this.name = name;
        }
        return TypeItem;
    })();
    click.TypeItem = TypeItem;
    var ZoneItem = (function (_super) {
        __extends(ZoneItem, _super);
        function ZoneItem() {
            _super.call(this);
        }
        return ZoneItem;
    })(click.Item);
    click.ZoneItem = ZoneItem;

    var BannerZoneCategory = (function (_super) {
        __extends(BannerZoneCategory, _super);
        function BannerZoneCategory(code, name) {
            _super.call(this, code, name);
        }
        return BannerZoneCategory;
    })(TypeItem);
    click.BannerZoneCategory = BannerZoneCategory;

    var BannerZonePosition = (function (_super) {
        __extends(BannerZonePosition, _super);
        function BannerZonePosition(code, name) {
            _super.call(this, code, name);
        }
        return BannerZonePosition;
    })(TypeItem);
    click.BannerZonePosition = BannerZonePosition;
    var BannerZoneRunningMode = (function (_super) {
        __extends(BannerZoneRunningMode, _super);
        function BannerZoneRunningMode(code, name) {
            _super.call(this, code, name);
        }
        return BannerZoneRunningMode;
    })(TypeItem);
    click.BannerZoneRunningMode = BannerZoneRunningMode;

    // Class
    var BannerZoneItem = (function (_super) {
        __extends(BannerZoneItem, _super);
        function BannerZoneItem() {
            _super.call(this);
        }
        return BannerZoneItem;
    })(ZoneItem);
    click.BannerZoneItem = BannerZoneItem;

    var VideoZoneItemType = (function (_super) {
        __extends(VideoZoneItemType, _super);
        function VideoZoneItemType(code, name) {
            _super.call(this, code, name);
        }
        return VideoZoneItemType;
    })(TypeItem);
    click.VideoZoneItemType = VideoZoneItemType;

    var VideoZoneBannerTypePosition = (function (_super) {
        __extends(VideoZoneBannerTypePosition, _super);
        function VideoZoneBannerTypePosition(code, name) {
            _super.call(this, code, name);
        }
        return VideoZoneBannerTypePosition;
    })(TypeItem);
    click.VideoZoneBannerTypePosition = VideoZoneBannerTypePosition;
    var VideoZoneTVCTypePosition = (function (_super) {
        __extends(VideoZoneTVCTypePosition, _super);
        function VideoZoneTVCTypePosition(code, name) {
            _super.call(this, code, name);
        }
        return VideoZoneTVCTypePosition;
    })(TypeItem);
    click.VideoZoneTVCTypePosition = VideoZoneTVCTypePosition;

    var VideoZoneBannerType = (function (_super) {
        __extends(VideoZoneBannerType, _super);
        function VideoZoneBannerType() {
            _super.apply(this, arguments);
        }
        return VideoZoneBannerType;
    })(VideoZoneItemType);
    click.VideoZoneBannerType = VideoZoneBannerType;
    var VideoZoneTVCType = (function (_super) {
        __extends(VideoZoneTVCType, _super);
        function VideoZoneTVCType() {
            _super.apply(this, arguments);
        }
        return VideoZoneTVCType;
    })(VideoZoneItemType);
    click.VideoZoneTVCType = VideoZoneTVCType;

    var VideoZoneItem = (function (_super) {
        __extends(VideoZoneItem, _super);
        function VideoZoneItem() {
            _super.apply(this, arguments);
        }
        return VideoZoneItem;
    })(ZoneItem);
    click.VideoZoneItem = VideoZoneItem;
    var VideoZoneCategory = (function (_super) {
        __extends(VideoZoneCategory, _super);
        function VideoZoneCategory(code, name) {
            _super.call(this, code, name);
        }
        return VideoZoneCategory;
    })(TypeItem);
    click.VideoZoneCategory = VideoZoneCategory;
})(click || (click = {}));
//# sourceMappingURL=ZoneItem.js.map
