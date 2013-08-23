
module click {
    export class WebsiteItem extends Item {
        public URL: string;
        public reviewType: number;
        public usage: number;
        public owner: string;

        constructor(id : number , url :string, reviewType : number , usage: number , owner:string) {
            super(id);
            this.URL = url;
            this.reviewType = reviewType;
            this.usage = usage;
            this.owner = owner;
        }
    }
}