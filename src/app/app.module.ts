import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ItemsCardsComponent } from './items-cards/items-cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { environment } from 'src/environments/environment';
import { CartComponent } from './cart/cart.component';
import { FilterComponent } from './filter/filter.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ItemsCardsComponent,
    SearchBarComponent,
    CartComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot({ ui: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
