import { Component, OnInit } from '@angular/core';
import { games as sampleGames } from '../../data/games';
import { Game } from '../../interfaces/Game';

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
