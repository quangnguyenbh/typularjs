/// <reference path="../libs/angular-1.0.d.ts"/>
module click {
    export interface IItemScope<T extends click.Item> extends ng.IScope {
        item: T;
        save(item : T): number;        
    }

    export interface IListScope<T extends click.Item> extends ng.IScope {
        items: Array<T>;        
    }

    export interface IZoneGroupScope extends IListScope<ZoneItem> {
        zgroup: ZoneGroup;
        curWebsite: number;
        selectedZones: Array;
        selectZone: (name: string) => void;
        removeSelectedZone: (name: string) => void;
        removeAllSelected: () => void;
        addZoneGroup: () => void;
        isClean: () => boolean;
    }
    export interface IZoneScope extends IItemScope<ZoneItem> {
        curWebsite: number; 
        addZone: () => void;


    }
    export interface IWebsiteScope extends ng.IScope {
        vm: any;
        websites: WebsiteItem[];
        website: WebsiteItem;
        checked: Array<number> ;
        message: string;
        curWebsite: number;
        //zone 
        zones: ZoneItem[];
        zoneGroups: ZoneGroup[];
        addWebsite: () => void;
        addZone: () => void;
        onSelect: () => void;
              
    }
}