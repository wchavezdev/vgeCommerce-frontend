import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../interfaces/Game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styles: [],
})
export class GameCardComponent implements OnInit {
  @Input() game!: Game;

  constructor() {}

  ngOnInit(): void {}
}
