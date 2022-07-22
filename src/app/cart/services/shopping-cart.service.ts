import { Injectable } from '@angular/core';

import { Game } from '../../games/interfaces';
import { CartState } from '../interfaces/Cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cartState: CartState = {
    items: [],
    total: 0,
  };

  constructor() {
    const cart = localStorage.getItem('cart');

    if (cart) {
      this.cartState = JSON.parse(cart);
    }
  }

  calculateTotal() {
    this.cartState.total = this.cartState.items.reduce(
      (total, i) => total + i.game.price,
      0
    );
  }

  addToCart(game: Game) {
    this.cartState.items.push({ game });

    this.calculateTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartState));
  }

  removeFromCart(gameId: number) {
    this.cartState.items = this.cartState.items.filter(
      (i) => i.game.id !== gameId
    );

    this.calculateTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartState));
  }

  isItemInCart(gameId: number) {
    return this.cartState.items.some((i) => i.game.id === gameId);
  }
}
