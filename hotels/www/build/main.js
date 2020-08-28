webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotels_hotels__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openHotelsList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hotels_hotels__["a" /* HotelsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\alist\Downloads\test_task\test_task\hotels\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Главная</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Система бронирования гостиниц</h3>\n\n  <button ion-button secondary  (click)="openHotelsList()">Подобрать гостиницу</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alist\Downloads\test_task\test_task\hotels\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HotelsProvider = /** @class */ (function () {
    function HotelsProvider() {
        this.hotels = [
            {
                imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
                title: 'Будапешт',
                description: 'Московский отель "Будапешт"',
                roomCost: 5000,
                hasParking: true,
                address: 'Москва, ул. Петровские Линии, 2',
                phone: '8 (495) 729-35-01'
            },
            {
                imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
                title: 'Космос',
                description: 'Гостиница "Космос"',
                roomCost: 3000,
                hasParking: true,
                address: 'Москва, пр-т Мира, 150',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://weproject.media/upload/iblock/fd2/fd2c45929b8fa0c1f4ab0d2c848d1d77.jpg',
                title: 'Hilton',
                description: 'Отель "Hilton Ленинградская"',
                roomCost: 25000,
                hasParking: true,
                address: 'Москва, Каланчевская ул.21',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/251815094.jpg?k=202809220df71da796cfcbe6750b7f58b80d8e0ba7a0cfdfa6d2db383f3fa2f8&o=',
                title: 'Сокольники',
                description: 'Гостиница "Холидей Сокольники"',
                roomCost: 4000,
                hasParking: true,
                address: 'Москва, ул. Русаковская дом 24',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
                title: 'Рэдиссон Славянская',
                description: 'Гостиница "Рэдиссон Славянская"',
                roomCost: 10000,
                hasParking: false,
                address: 'Москва, площадь Европы',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: '',
                title: 'Космос',
                description: 'Гостиница "Azimut Olympic"',
                roomCost: 12000,
                hasParking: false,
                address: 'Москва, Олимпийский проспект, 18',
                phone: '8 (495) 234-12-06'
            }
        ];
    }
    HotelsProvider.prototype.getHotels = function () {
        return this.hotels;
    };
    HotelsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], HotelsProvider);
    return HotelsProvider;
}());

//# sourceMappingURL=hotels.provider.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterPage = /** @class */ (function () {
    function FilterPage(navParams, viewController) {
        this.navParams = navParams;
        this.viewController = viewController;
    }
    FilterPage.prototype.ngOnInit = function () {
        this.filterValues = this.navParams.get('filterValues') || {};
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            from: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.filterValues.from || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].min(0)),
            to: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.filterValues.to || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].min(0)),
            parking: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.filterValues.parking || null),
        });
    };
    FilterPage.prototype.submitForm = function () {
        this.viewController.dismiss(this.form.value);
    };
    FilterPage.prototype.resetForm = function () {
        this.viewController.dismiss();
    };
    FilterPage.prototype.dismissModal = function () {
        this.viewController.dismiss(this.filterValues);
    };
    Object.defineProperty(FilterPage.prototype, "fromControl", {
        get: function () {
            return this.form.get('from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPage.prototype, "toControl", {
        get: function () {
            return this.form.get('to');
        },
        enumerable: true,
        configurable: true
    });
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"C:\Users\alist\Downloads\test_task\test_task\hotels\src\pages\filter\filter.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Фильтр</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="dismissModal()">Закрыть</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="submitForm()" novalidate [(formGroup)]="form">\n    <div class="group">\n      <ion-item [ngClass]="{\'has-error\': fromControl.invalid}">\n        <ion-input type="number" placeholder="Цена от:" formControlName="from"></ion-input>\n      </ion-item>\n\n      <ion-note class="message" *ngIf="fromControl.invalid">\n        Цена не может быть ниже 0\n      </ion-note>\n\n      <ion-item [ngClass]="{\'has-error\': toControl.invalid}">\n        <ion-input type="number" placeholder="Цена до:" formControlName="to"></ion-input>\n      </ion-item>\n\n      <ion-note class="message" *ngIf="toControl.invalid">\n        Цена не может быть ниже 0\n      </ion-note>\n    </div>\n\n    <div class="group">\n      <ion-item>\n        <ion-label>Наличие парковки обязательно</ion-label>\n        <ion-checkbox color="secondary" formControlName="parking"></ion-checkbox>\n      </ion-item>\n    </div>\n\n    <ion-row>\n      <ion-col col-6>\n        <button type="submit" ion-button block color="secondary" [disabled]="form.invalid">\n          <span>Применить</span>\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <button type="button" ion-button block color="danger" (click)="resetForm()">\n          <span>Сбросить</span>\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\alist\Downloads\test_task\test_task\hotels\src\pages\filter\filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelOverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelOverviewPage = /** @class */ (function () {
    function HotelOverviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HotelOverviewPage.prototype.ngOnInit = function () {
        this.hotel = this.navParams.get('hotel');
    };
    HotelOverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hotel-overview',template:/*ion-inline-start:"C:\Users\alist\Downloads\test_task\test_task\hotels\src\pages\hotel-overview\hotel-overview.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>{{ hotel.title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img *ngIf="hotel.imageUrl" [src]="hotel.imageUrl">\n    <img *ngIf="!hotel.imageUrl" src="././assets/imgs/no-image.jpg">\n\n    <ion-card-header>\n      <ion-card-title>{{ hotel.description }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngIf="hotel.roomCost !== undefined">\n          <ion-icon name="cash"></ion-icon>\n          <ion-label><strong>Цена:</strong> {{ hotel.roomCost }}</ion-label>\n        </ion-item>\n\n        <ion-item *ngIf="hotel.hasParking !== undefined">\n          <ion-icon name="car"></ion-icon>\n          <ion-label><strong>Наличие парковки: </strong>{{ hotel.hasParking ? \'есть\' : \'нет\' }}</ion-label>\n        </ion-item>\n\n        <ion-item *ngIf="hotel.address">\n          <ion-icon name="pin"></ion-icon>\n          <ion-label><strong>Адрес: </strong>{{ hotel.address }}</ion-label>\n        </ion-item>\n\n        <ion-item *ngIf="hotel.phone">\n          <ion-icon name="call"></ion-icon>\n          <ion-label><strong>Телефон: </strong>{{ hotel.phone }}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alist\Downloads\test_task\test_task\hotels\src\pages\hotel-overview\hotel-overview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HotelOverviewPage);
    return HotelOverviewPage;
}());

//# sourceMappingURL=hotel-overview.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hotels_hotels__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_filter_filter__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pipes_filter_pipe__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_hotel_overview_hotel_overview__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_providers_hotels_provider__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hotels_hotels__["a" /* HotelsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hotel_overview_hotel_overview__["a" /* HotelOverviewPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_7__shared_pipes_filter_pipe__["a" /* FilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hotels_hotels__["a" /* HotelsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hotel_overview_hotel_overview__["a" /* HotelOverviewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__shared_providers_hotels_provider__["a" /* HotelsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hotels_hotels__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Главная', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Гостиницы', component: __WEBPACK_IMPORTED_MODULE_5__pages_hotels_hotels__["a" /* HotelsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\alist\Downloads\test_task\test_task\hotels\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Меню</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\alist\Downloads\test_task\test_task\hotels\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (hotels, filterValues) {
        if (hotels.length && filterValues) {
            if (filterValues.from || filterValues.to || filterValues.parking) {
                return hotels.filter(function (hotel) { return filterValues.from ? hotel.roomCost >= filterValues.from : true; })
                    .filter(function (hotel) {
                    if (filterValues.to) {
                        return hotel.roomCost <= filterValues.to;
                    }
                    return true;
                })
                    .filter(function (hotel) {
                    if (filterValues.parking) {
                        return hotel.hasParking;
                    }
                    return true;
                });
            }
        }
        return hotels;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'filterPipe' })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_providers_hotels_provider__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hotel_overview_hotel_overview__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HotelsPage = /** @class */ (function () {
    function HotelsPage(modalController, navCtrl, hotelsProvider) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.hotelsProvider = hotelsProvider;
        this.filterValues = {};
    }
    HotelsPage.prototype.ngOnInit = function () {
        this.hotels = this.hotelsProvider.getHotels();
    };
    HotelsPage.prototype.openHotelOverviewPage = function (hotel) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hotel_overview_hotel_overview__["a" /* HotelOverviewPage */], { hotel: hotel });
    };
    HotelsPage.prototype.openFilterModal = function () {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* FilterPage */], {
            filterValues: this.filterValues,
        });
        modal.present();
        modal.onDidDismiss(function (filterValues) {
            _this.filterValues = filterValues;
        });
    };
    HotelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hotels',template:/*ion-inline-start:"C:\Users\alist\Downloads\test_task\test_task\hotels\src\pages\hotels\hotels.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button secondary (click)="openFilterModal()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Гостиницы</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let hotel of hotels | filterPipe:filterValues" (click)="openHotelOverviewPage(hotel)">\n      <ion-card>\n        <div class="darkened">\n          <img *ngIf="hotel.imageUrl" [src]="hotel.imageUrl"/>\n        </div>\n        <div class="darkened">\n          <img *ngIf="!hotel.imageUrl" src="assets/imgs/no-image.jpg">\n        </div>\n        <div class="card-title">{{hotel.title}}</div>\n        <div class="card-subtitle" *ngIf="hotel.address">{{hotel.address}}</div>\n      </ion-card>\n    </button>\n\n    <div padding *ngIf="!(hotels | filterPipe:filterValues).length">\n      <ion-item-divider no-lines>\n        <ion-icon margin-right name="information-circle"></ion-icon>\n        По Вашему запросу ничего не найдено.\n      </ion-item-divider>\n\n      <button ion-button secondary block (click)="filterValues = {}">\n        Сбросить фильтр\n      </button>\n    </div>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\alist\Downloads\test_task\test_task\hotels\src\pages\hotels\hotels.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_providers_hotels_provider__["a" /* HotelsProvider */]])
    ], HotelsPage);
    return HotelsPage;
}());

//# sourceMappingURL=hotels.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map