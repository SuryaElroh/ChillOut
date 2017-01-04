import { NavController, NavParams } from 'ionic-angular';
export declare class ListPage {
    navCtrl: NavController;
    navParams: NavParams;
    selectedItem: any;
    icons: string[];
    items: Array<{
        title: string;
        note: string;
        icon: string;
    }>;
    constructor(navCtrl: NavController, navParams: NavParams);
    itemTapped(event: any, item: any): void;
}
