import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { GamesService } from '../../services';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  constructor(private gamesService: GamesService) {}

  get games() {
    return this.gamesService.games;
  }

  ngOnInit(): void {}

  delete(gameId: number) {
    alert('Está seguro de eliminar el juego?');
    this.gamesService.delete(gameId);
  }
}
