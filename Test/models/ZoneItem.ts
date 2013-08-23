
class Item {
    public id: number;
    constructor(id: number) {
        this.id = id;        
    }
}
// Module
module click {
    
    // Class
    export class ZoneItem extends Item {
        public name: string;
        public category: number[];
        public type: number[];
        public allowItemType: number[];
        public size: number;
        public minCPMprice: number;
        public minCPCprice: number;
        public fallbackHTML: string;        
    }

}

// Local variables

