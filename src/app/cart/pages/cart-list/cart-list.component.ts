import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { ShoppingCartService } from '../../services';

import { Game } from '../../../games/interfaces';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  faTrash = faTrash;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}

  get total() {
    return this.shoppingCartService.cartState.total;
  }

  get items() {
    return this.shoppingCartService.cartState.items;
  }

  addToCart(game: Game) {
    this.shoppingCartService.addToCart(game);
  }

  removeFromCart(gameId: number) {
    this.shoppingCartService.removeFromCart(gameId);
  }
}
