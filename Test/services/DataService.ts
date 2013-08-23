/// <reference path="../models/ZoneItem.ts"/>
/// <reference path="../models/WebsiteItem.ts"/>

module click {

    export interface IDataService<T extends Item> {
        load(id: number): T;
        save(item: T): number;
        update(item: T);

        list(from: number, count: number): {
            list: Array<T>;
            total: number;
        };
        listAll(): {
            list: Array<T>;
            total: number;
        };
    }

    export class ClientDataService<T extends Item> implements IDataService<T>{
        _items : Array<T> = [];
        save (item : T)  {
            return this._items.push(item) ;
        }

        load(id: number){
            this._items.forEach(function(t) {
                if (t.id == id) {
                    return t;
                }
            });
            return null;    
        }
        update(item: T) { }

        list(from: number, count: number)  {
            return {
                list: [
                    new WebsiteItem(1,"baomoi.com",1,0.3,"chinhnc"),
                    new WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc")
                ],
                total: 2
            };
        }

        listAll() {
            return {
                list: [
                    new WebsiteItem(1, "baomoi.com", 1, 0.3, "chinhnc"),
                    new WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc")
                ],
                total: 2
            };
        }

    }
}
