import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Hotel } from '../../shared/interfaces/hotel.interface';

@Component({
  selector: 'page-hotel-overview',
  templateUrl: './hotel-overview.html',
})
export class HotelOverviewPage {

  hotel: Hotel;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    this.hotel = this.navParams.get('hotel');
  }
}
