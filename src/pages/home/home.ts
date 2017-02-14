import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ElonData, FeedItem} from "../../providers/elon-data";
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articles: FeedItem[];
  loading: Boolean;
  constructor(public navCtrl: NavController, public elonData:ElonData) {

  }

  ionViewWillEnter(){
    this.loading = true;
    this.elonData.load().subscribe(res => {
      this.articles = res;
      console.log(this.articles)
      this.loading = false;
    });
  }

}
