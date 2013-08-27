/// <reference path="../libs/angular-1.0.d.ts"/>
module click {
    export interface IWebsiteScope extends ng.IScope {
        vm: any;
        websites: WebsiteItem[];
        message: string;
        
        addWebsite : ()  => void ;        
    }
}