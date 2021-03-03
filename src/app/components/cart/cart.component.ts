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
  totalAmount = 0;
  checkedOut = false;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.subscription = this.shopService.cartState.subscribe((cart: ICart[]) => {
      this.cart = cart;
    });
    this.calculateTotalAmount();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    if (this.checkedOut) {
      this.checkedOut = false;
    }
  }

  calculateTotalAmount = () => {
    if (this.cart.length > 0) {
      this.totalAmount = this.cart.map(a => a.price).reduce((a, b) => {
        return a + b;
      });
    }
  }

  increaseQuantity = (index: number) => {
    const value = ++this.cart[index].quantity;
    this.cart[index].price = this.cart[index].price + this.cart[index].newPrice;
    this.cart[index].quantity = value;
    this.calculateTotalAmount();
  }

  decreaseQuantity = (index: number) => {
    let value = this.cart[index].quantity;
    --value;
    if (value !== 0) {
      this.cart[index].price = this.cart[index].price - this.cart[index].newPrice;
      this.cart[index].quantity = value;
      this.calculateTotalAmount();
    }
  }

  remove = (index: number) => {
    const confirmRemove = confirm('Are you sure you want to remove this product?');
    if (confirmRemove) {
      this.cart.splice(index, 1);
    }
  }

  checkout = () => {
    this.checkedOut = true;
    this.totalAmount = 0;
    this.shopService.checkout();
  }

}
