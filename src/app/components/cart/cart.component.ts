import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/models/cart.interface';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  cart: ICart[] = [
    {
      id: 0,
      name: 'Sample',
      summary: 'this is a sample cart',
      price: 1500,
      newPrice: 1500,
      bgColor: '#c3e5e4',
      image: './assets/images/Image 32.png',
      quantity: 1,
      size: 'L'
    },
    {
      id: 1,
      name: 'Sample',
      summary: 'this is a sample cart',
      price: 200,
      newPrice: 200,
      bgColor: '#e6e6e6',
      image: './assets/images/Image 36.png',
      quantity: 1,
      size: 'M'
    },
  ];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    // this.subscription = this.shopService.cartState.subscribe((cart: ICart[]) => {
    //   this.cart = cart;
    // });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  increaseQuantity = (index: number) => {
    const value = ++this.cart[index].quantity;
    this.cart[index].price = this.cart[index].price + this.cart[index].newPrice;
    this.cart[index].quantity = value;
  }

  decreaseQuantity = (index: number) => {
    let value = this.cart[index].quantity;
    --value;
    if (value !== 0) {
      this.cart[index].price = this.cart[index].price - this.cart[index].newPrice;
      this.cart[index].quantity = value;
    }
  }

}
