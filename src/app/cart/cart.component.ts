import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../models/cart-item.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productList!: CartItem[];
  totalPrice!: number;

  constructor(public cartItems: CartService) {
    this.productList = this.cartItems.itemsList;
    this.totalPrice = this.cartItems.totalPrice;
  }

  ngOnInit(): void {}

  removeItem(product: CartItem) {
    this.cartItems.onRemoveItem(product);
  }
}
