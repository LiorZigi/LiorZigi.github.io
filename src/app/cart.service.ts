import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CartItem } from './models/cart-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itemsList: CartItem[] = [];
  totalPrice!: number;

  constructor(private _snackBar: MatSnackBar, private db: AngularFirestore) {}

  onAddItem(selectedId: string) {
    this.db
      .doc<CartItem>(selectedId)
      .valueChanges()

      .subscribe((result) => {
        if (result) {
          console.log(result);
          this.itemsList.push(result);
          this.increaseTotalPrice();
        }
      });
  }

  onRemoveItem(product: CartItem) {
    const itemIndex = this.itemsList.indexOf(product);
    this.itemsList.splice(itemIndex, 1);
    this.decreaseTotalPrice();
  }

  openSnackBar() {
    this._snackBar.open('Your cart is empty.', 'ok');
  }

  increaseTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.itemsList.length; i++) {
      this.totalPrice += this.itemsList[i].price;
    }
  }

  decreaseTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.itemsList.length; i++) {
      this.totalPrice += this.itemsList[i].price;
    }
  }
}
