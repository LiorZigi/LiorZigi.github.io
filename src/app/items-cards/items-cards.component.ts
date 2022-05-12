import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { CartService } from '../cart.service';
import { FilterService } from '../filter.service';
import { FilterComponent } from '../filter/filter.component';

import { CartItem } from '../models/cart-item.interface';
import { ProductList } from '../models/product-list.interface';

@Component({
  selector: 'app-items-cards',
  templateUrl: './items-cards.component.html',
  styleUrls: ['./items-cards.component.scss'],
})
export class ItemsCardsComponent implements OnInit {
  products: ProductList[] = [];

  constructor(
    private cartItem: CartService,
    private db: AngularFirestore,
    public filter: FilterService
  ) {}

  ngOnInit(): void {
    this.db
      .collection<ProductList>('items')
      .valueChanges()
      .subscribe((result) => {
        if (result) {
          console.log(result);
          this.products = result;
        }
      });
  }

  addItem(itemId: string) {
    this.cartItem.onAddItem(itemId);
  }

  removeItem(item: CartItem) {
    this.cartItem.onRemoveItem(item);
  }
}
