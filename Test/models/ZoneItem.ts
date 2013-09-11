/// <reference path="WebsiteItem.ts"/>
// Module
module click {
    'use strict';

    export class TypeItem {
        public code: number;
        public name: string;
        constructor(code: number, name: string) {
            this.code = code;
            this.name = name;
        }
    }
    export class ZoneItem extends Item {
        name: string;
        websiteId: number;
        zoneGroups: ZoneGroup[];
        constructor() {
            super();
        }        
    }

    export class BannerZoneCategory extends TypeItem {
        constructor(code: number, name: string) {
            super(code, name);
        }
    }

    export class BannerZonePosition extends TypeItem {
        constructor(code: number, name: string) {
            super(code, name);
        }
    }
    export class BannerZoneRunningMode extends TypeItem {
        constructor(code: number, name: string) {
            super(code, name);
        }
    }

    // Class
    export class BannerZoneItem extends ZoneItem {        
        public categories: BannerZoneCategory[];
        public zoneGroups: click.ZoneGroup[];
        public runningModes: BannerZoneRunningMode[];
        public positions: BannerZonePosition[];
        public size: number;
        public minCPMprice: number;
        public minCPCprice: number;
        public fallbackHTML: string;
        constructor() {
            super();
        }        
    }
    
    export class VideoZoneItemType extends TypeItem {
        constructor(code: number, name: string) {
            super(code, name);
        }
    }

    export class VideoZoneBannerTypePosition extends TypeItem {
        constructor(code: number, name: string) {
            super(code, name);
        }
    }
    export class VideoZoneTVCTypePosition extends TypeItem {
        constructor(code: number, name: string) {
            super(code, name);
        }
    }

    export class VideoZoneBannerType extends VideoZoneItemType {
        adsSize: number;
        adsDisplayTime: number;
        addPositions: VideoZoneBannerTypePosition[];
        maxAdsDuration: number;
        maxAdsGroupDuration: number;
        minCPCPrice: number;
        minCPMPrice: number;
    }
    export class VideoZoneTVCType extends VideoZoneItemType {
        addPositions: VideoZoneTVCTypePosition[];
        maxAdsDuration: number;
        maxAdsGroupDuration: number;
        minCPMPrice: number;
        min1per4Price: number;
        min1per2Price: number;
        min3per4Price: number;
        minFullPrice: number;
    }

    export class VideoZoneItem extends ZoneItem {
        
        zoneGroups: click.ZoneGroup[];
        categories: VideoZoneCategory[];
        itemTypes: VideoZoneItemType[];
    }
    export class VideoZoneCategory extends TypeItem {
        constructor(code: number, name: string) {
            super(code, name);
        }
    }
}

// Local variables

