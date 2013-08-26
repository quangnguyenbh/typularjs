
module click {
    export class Item {
        public id: number;
        constructor(id: number) {
            this.id = id;
        }
    }

    export class WebsiteItem extends Item{
        
        public URL: string;
        public name: string;
        public reviewType: number;
        public usage: number;
        public owner: string;
        public description: string;

        constructor(id: number, url: string, reviewType: number, usage: number, owner: string, name : string, des : string) {
            super(id);
            this.URL = url;
            this.name = name;
            this.reviewType = reviewType;
            this.usage = usage;
            this.owner = owner;
            this.description = des;
        }
        
    }
}