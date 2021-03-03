import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  productList: Array<IProduct> = ([
    {
      id: 100,
      name: 'UNEO',
      price: 1500,
      favorite: false,
      summary: 'Unisex Pack Of 2',
      images: [],
      bgColor: '#c3e5e4'
    },
    {
      id: 200,
      name: 'US Polo',
      price: 2500,
      favorite: false,
      summary: 'Unisex Pack Of 3',
      images: [],
      bgColor: '#e6e6e6'
    },
    {
      id: 300,
      name: 'HERO',
      price: 3500,
      favorite: false,
      summary: 'Unisex Pack Of 2',
      images: [],
      bgColor: '#d1d4d8'
    },
    {
      id: 400,
      name: 'UNEO Pro',
      price: 4500,
      favorite: false,
      summary: 'Unisex Pack Of 3',
      images: [],
      bgColor: '#f7f0e5'
    },
    {
      id: 500,
      name: 'Wild Craft',
      price: 5500,
      favorite: false,
      summary: 'Unisex Pack Of 2',
      images: [],
      bgColor: '#fceaf2'
    },
  ]);

  constructor() { }

  getProducts = (): IProduct[] => {
    return this.productList;
  }

  getProductById = (id: number): IProduct => {
    return this.productList.filter(product => product.id === id)[0];
  }
}
