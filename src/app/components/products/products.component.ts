import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.products = this.shopService.getProducts();
    console.log(this.products);
  }

}
