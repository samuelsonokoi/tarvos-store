import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product.interface';
import { initProduct } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct = (initProduct);
  id: any;

  constructor(private shopService: ShopService, private routerParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routerParams.snapshot.paramMap.get('id');

    this.product = this.shopService.getProductById(+this.id);
  }

  addToFavorite = () => {
    this.shopService.getProducts().some((product, index) => {
      if (product.id === this.product.id) {
        this.shopService.addToFavorite(index);
      }
    });
  }

  removeFromFavorite = () => {
    this.shopService.getProducts().some((product, index) => {
      if (product.id === this.product.id) {
        this.shopService.removeFromFavorite(index);
      }
    });
  }

}
