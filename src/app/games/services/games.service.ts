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

  create(game: Partial<Game>) {
    this.games.push({
      ...game,
      id: this.games.length + 1,
      rating: 0,
    } as Game);
  }

  update(game: Partial<Game>, gameId: number) {
    this.games = this.games.map((g) =>
      g.id === gameId ? { ...g, ...game } : g
    );
  }

  delete(id: number) {
    this.games = this.games.filter((game) => game.id !== id);
  }
}
