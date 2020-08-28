import { Injectable } from '@angular/core';

import { Hotel } from '../interfaces/hotel.interface';

@Injectable()
export class HotelsProvider {

  hotels: Hotel[] = [
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

  getHotels(): Hotel[] {
    return this.hotels;
  }
}
