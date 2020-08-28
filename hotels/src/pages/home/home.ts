import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HotelsPage} from "../hotels/hotels";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openHotelsList(): void {
    this.navCtrl.push(HotelsPage);
  }
}
