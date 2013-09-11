/// <reference path="WebsiteItem.ts"/>

module click {

    'use strict';

    export class ZoneGroup extends Item {
        public name: string;
        public websiteId: number;
        public zones: ZoneItem[];
        constructor() {
            super();
        }         
    }
    
}