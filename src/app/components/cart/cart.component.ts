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
  cart: ICart[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.subscription = this.shopService.cartState.subscribe((cart: ICart[]) => {
      this.cart = cart;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
