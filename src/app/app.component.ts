import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from './cart.service';
import { CartItem } from './models/cart-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  productList!: CartItem[];
  totalPrice!: number;

  productsForm!: FormGroup;
  showFiller = false;

  constructor(private _snackBar: MatSnackBar, public cartItems: CartService) {
    this.productList = this.cartItems.itemsList;
    this.totalPrice = this.cartItems.totalPrice;
  }

  ngOnInit() {
    this.productsForm = new FormGroup({
      greaterThan500: new FormControl('', Validators.requiredTrue),
      lessThan500: new FormControl('', Validators.requiredTrue),
      greaterThan1000: new FormControl('', Validators.requiredTrue),
      oneStar: new FormControl('', Validators.requiredTrue),
      twoStars: new FormControl('', Validators.requiredTrue),
      threeStars: new FormControl('', Validators.requiredTrue),
      fourStars: new FormControl('', Validators.requiredTrue),
      fiveStars: new FormControl('', Validators.requiredTrue),
    });
  }

  removeItem(product: CartItem) {
    this.cartItems.onRemoveItem(product);
  }
}
