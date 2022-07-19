import { Component, OnInit } from '@angular/core';

import { Game } from '../../../games/interfaces';

import { games as sampleGames } from '../../../games/data/games';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  games: Game[] = sampleGames;

  constructor() {}

  ngOnInit(): void {}
}
