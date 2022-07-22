import { Game } from '../../games/interfaces';

export interface CartItem {
  game: Game;
  discount?: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}
