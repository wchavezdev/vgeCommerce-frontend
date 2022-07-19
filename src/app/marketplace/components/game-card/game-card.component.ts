import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../../../games/interfaces';

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
