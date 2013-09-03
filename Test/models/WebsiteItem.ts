
module click {
    'use strict';

    export class Item {
        public id: number;
        constructor() { }
    }
    //export class WebsiteReviewType extends click.TypeItem {
    //    constructor(code: number, name: string) {
    //        super(code, name);
    //    }
    //} 

    export class WebsiteItem extends click.Item {
        id: number;
        public URL: string;
        public name: string;
        public reviewType: number;
        public usage: number;
        public owner: string;
        public description: string;
        public zones: click.ZoneItem[];
        
        constructor(id: number, url: string, reviewType: number, usage: number, owner: string, name : string, des : string) {
            super();
            this.id = id;
            this.URL = url;
            this.name = name;
            this.reviewType = reviewType;
            this.usage = usage;
            this.owner = owner;
            this.description = des;
        }

        //public setZoneGroups(zg: ZoneGroup[]) {
        //    this.zoneGroups = zg;
        //}
        //public setBannerZones(bz: BannerZoneItem[]) {
        //    this.bannerZones = bz;
        //}
        //public setVideoZones(vz: VideoZoneItem[]) {
        //    this.videoZones = vz;
        //}
        
    }
}