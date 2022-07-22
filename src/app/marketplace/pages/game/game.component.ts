import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  faArrowLeft,
  faCartPlus,
  faCartArrowDown,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';

import { GamesService } from '../../../games/services';
import { ShoppingCartService } from '../../../cart/services';

import { Game } from '../../../games/interfaces';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faCartPlus = faCartPlus;
  faCartArrowDown = faCartArrowDown;
  faCreditCard = faCreditCard;

  game!: Game;
  loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const game = this.gamesService.getGameById(+params['id']);

      if (game) {
        this.game = game;
        this.loading = false;
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  get isGameInCart() {
    return this.shoppingCartService.isItemInCart(+this.game.id);
  }

  handleCart() {
    if (this.isGameInCart) {
      this.shoppingCartService.removeFromCart(+this.game.id);
    } else {
      this.shoppingCartService.addToCart(this.game);
    }
  }
}
