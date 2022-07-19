import { Injectable } from '@angular/core';
import { games } from '../data/games';
import { Game } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  games: Game[] = games;

  constructor() {}

  getGameById(id: number): Game | undefined {
    return this.games.find((game) => game.id === id);
  }
}
