/// <reference path="../models/ZoneItem.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>

module click {

    export interface IDataService<T extends click.Item> {
        load(id: number): T;
        save(item: T): number;
        update(item: T);

        list(from: number, count: number): {
            lists: Array<T>;
            total: number;
        };

        init();
        listAll(): {
            lists: Array<T>;
            total: number;
        };
    }    
    export interface IZoneGroupService extends IDataService<ZoneGroup> {

        listZoneGroupOfWebsite(websiteId: number): {
            lists: Array<ZoneGroup>;
            total: number;
        };
     
    }


    export class ClientDataService<T extends click.Item> implements IDataService<T>{
        _items: Array<T> = [
            //new click.WebsiteItem(1, "baomoi.com", 1, 0.3, "chinhnc"),
            //new click.WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc"),
            //new click.WebsiteItem(3, "mp3.zing.vn", 1, 0.3, "chinhnc","baomoi.com","des")
        ];
        init() {
            //var a =  new click.WebsiteItem(1, "baomoi.com", 1, 0.3, "chinhnc", "baomoi.com", "baomoi des");
            //var b = new click.WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc", "zing", "zing des");
            //this._items.push(a);
            //this._items.push(b);
        }

        save(item: T) {
            console.log("save item ...");
            return this._items.push(item) ;
        }

        load(id: number) {
            var ret: T = null;
            this._items.forEach(function(t) {
                if (t.id == id) {
                    return t;
                }
            });
            return ret;    
        }
        update(item: T) { }

        list(from: number, count: number)  {
            return {
                lists: new Array<T>(),
                total: 2
            };
        }

        listAll() {
            return {
                lists: this._items,
                total: this._items.length
            };
        }

    }
    export class ZoneGroupService extends ClientDataService<ZoneGroup> implements IZoneGroupService {
        

        listZoneGroupOfWebsite(websiteId: number) {

            var ret: Array<ZoneGroup> = [];
            this._items.forEach(function (z: ZoneGroup) {
                if (z.websiteId == websiteId) {
                    ret.push(z);
                }
            });
            return {
                lists: ret,
                total: ret.length
            }
        }
    }
    export class ZoneDataService<T extends click.ZoneItem> {
        zones: Array<T> = [];

        load(id: number) {
            return null;
        }
        save(item: T) {
            console.log("save item....");
            this.zones.push(item);
        }

        listZoneOfWebsite(websiteId: number) {
            var ret: Array<T> = [];
            this.zones.forEach(function (z: T) {
                if (z.websiteId == websiteId) {
                    ret.push(z);
                }
            });
            return {
                lists: ret,
                total: ret.length
            }
        }
    }
}
