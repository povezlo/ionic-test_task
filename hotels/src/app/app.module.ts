import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HotelsPage } from '../pages/hotels/hotels';
import { FilterPage } from '../pages/filter/filter';
import { FilterPipe } from '../shared/pipes/filter.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HotelOverviewPage} from "../pages/hotel-overview/hotel-overview";
import {HotelsProvider} from "../shared/providers/hotels.provider";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HotelsPage,
    HotelOverviewPage,
    FilterPage,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilterPage,
    HomePage,
    HotelsPage,
    HotelOverviewPage
  ],
  providers: [
    HotelsProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
