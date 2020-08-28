import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Hotel} from "../../shared/interfaces/hotel.interface";
import {Filter} from "../../shared/interfaces/filter.interface";
import {HotelsProvider} from "../../shared/providers/hotels.provider";
import {FilterPage} from "../filter/filter";
import {HotelOverviewPage} from "../hotel-overview/hotel-overview";

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {
  hotels: Array<Hotel>;
  filterValues: Filter = {};

  constructor(
    public modalController: ModalController,
    public navCtrl: NavController,
    private hotelsProvider: HotelsProvider,
  ) { }

  ngOnInit() {
    this.hotels = this.hotelsProvider.getHotels();
  }

  openHotelOverviewPage(hotel: Hotel): void {
    this.navCtrl.push(HotelOverviewPage, { hotel });
  }

  openFilterModal(): void {
    const modal = this.modalController.create(FilterPage, {
      filterValues: this.filterValues,
    });

    modal.present();
    modal.onDidDismiss((filterValues: Filter) => {
      this.filterValues = filterValues;
    });
  }
}
