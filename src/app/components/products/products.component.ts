import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.interface';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.shopService.getProducts();
  }

  addToFavorite = (index: number) => {
    this.shopService.addToFavorite(index);
  }

  removeFromFavorite = (index: number) => {
    this.shopService.removeFromFavorite(index);
  }

}
