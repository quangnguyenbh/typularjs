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
        listAll(): {
            lists: Array<T>;
            total: number;
        };
    }

    export class ClientDataService<T extends click.Item> implements IDataService<T>{
        _items: Array<T> = [
            //new click.WebsiteItem(1, "baomoi.com", 1, 0.3, "chinhnc"),
            //new click.WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc"),
            //new click.WebsiteItem(3, "mp3.zing.vn", 1, 0.3, "chinhnc")
        ];
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
                lists: [
                    new click.WebsiteItem(1,"baomoi.com",1,0.3,"chinhnc","baomoi","baomoi'des"),
                    new click.WebsiteItem(2, "zing.vn", 1, 0.3, "chinhnc","zing","zing des")
                ],
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
}
