import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICart } from 'src/app/models/cart.interface';
import { IProduct } from 'src/app/models/product.interface';
import { initProduct } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: IProduct = (initProduct);
  id: any;
  selectedSize = '';

  constructor(private shopService: ShopService, private routerParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routerParams.snapshot.paramMap.get('id');

    this.product = this.shopService.getProductById(+this.id);
  }

  ngOnDestroy(): void {
    this.selectedSize = '';
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

  selectSize = (size: string) => this.selectedSize = size;

  addToCart = () => {
    if (this.selectedSize !== '') {
      const cartData: ICart = {
        id: Date.now(),
        name: this.product.name,
        price: this.product.price,
        summary: this.product.summary,
        bgColor: this.product.bgColor,
        quantity: 1,
        image: this.product.images[0],
        size: this.selectedSize,
        newPrice: this.product.price
      };
      this.shopService.addToCart(cartData);
    } else {
      alert('Please select a size');
    }
  }

}
