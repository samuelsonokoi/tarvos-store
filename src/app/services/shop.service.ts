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
      images: [
        './assets/images/Image 32.png'
      ],
      bgColor: '#c3e5e4'
    },
    {
      id: 200,
      name: 'US Polo',
      price: 2500,
      favorite: false,
      summary: 'Unisex Pack Of 3',
      images: [
        './assets/images/Image 36.png'
      ],
      bgColor: '#e6e6e6'
    },
    {
      id: 300,
      name: 'HERO',
      price: 3500,
      favorite: false,
      summary: 'Unisex Pack Of 2',
      images: [
        './assets/images/Image 37.png'
      ],
      bgColor: '#d1d4d8'
    },
    {
      id: 400,
      name: 'UNEO Pro',
      price: 4500,
      favorite: false,
      summary: 'Unisex Pack Of 3',
      images: [
        './assets/images/Image 39.png'
      ],
      bgColor: '#f7f0e5'
    },
    {
      id: 500,
      name: 'Wild Craft',
      price: 5500,
      favorite: false,
      summary: 'Unisex Pack Of 2',
      images: [
        './assets/images/Image 42.png'
      ],
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

  addToFavorite = (index: number) => {
    this.productList[index].favorite = true;
  }

  removeFromFavorite = (index: number) => {
    this.productList[index].favorite = false;
  }
}
