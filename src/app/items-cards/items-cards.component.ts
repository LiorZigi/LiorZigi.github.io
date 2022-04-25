import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AppComponent } from '../app.component';

import { CartService } from '../cart.service';

import { CartItem } from '../models/cart-item.interface';

@Component({
  selector: 'app-items-cards',
  templateUrl: './items-cards.component.html',
  styleUrls: ['./items-cards.component.scss'],
})
export class ItemsCardsComponent implements OnInit {
  constructor(
    private cartItem: CartService,
    private db: AngularFirestore,
    public appComp: AppComponent
  ) {}

  ngOnInit(): void {
    this.db
      .doc('items/5Xik3XcyUKx4ci3tMJ2a')
      .valueChanges()
      .subscribe((result) => {
        console.log(result);
      });
  }

  addItem(itemId: string) {
    this.cartItem.onAddItem(itemId);
  }

  removeItem(item: CartItem) {
    this.cartItem.onRemoveItem(item);
  }
}
