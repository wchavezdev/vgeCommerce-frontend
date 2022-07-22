import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './pages/cart-list/cart-list.component';

@NgModule({
  declarations: [CartListComponent],
  imports: [CommonModule, CartRoutingModule, FontAwesomeModule],
})
export class CartModule {}
