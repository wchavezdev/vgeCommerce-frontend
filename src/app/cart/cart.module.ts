import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './pages/cart-list/cart-list.component';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';

@NgModule({
  declarations: [CartListComponent, EmptyCartComponent],
  imports: [CommonModule, CartRoutingModule, FontAwesomeModule],
})
export class CartModule {}
