import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/models/cart.interface';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  cart: ICart[] = [];
  productsView = false;
  cartView = false;
  detailsView = false;

  constructor(private shopService: ShopService, private router: Router) {
    // listen to events from Router
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        if (url === '/products') {
          this.productsView = true;
          this.cartView = false;
          this.detailsView = false;
        } else if (url === '/cart') {
          this.cartView = true;
          this.productsView = false;
          this.detailsView = false;
        } else {
          this.detailsView = true;
          this.cartView = false;
          this.productsView = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.subscription = this.shopService.cartState.subscribe((cart: ICart[]) => {
      this.cart = cart;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
