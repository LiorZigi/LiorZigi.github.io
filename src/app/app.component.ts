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
  openSidenav = false;
  productsForm!: FormGroup;
  showFiller = false;

  constructor(private _snackBar: MatSnackBar, public cartItems: CartService) {}

  ngOnInit() {}
}
