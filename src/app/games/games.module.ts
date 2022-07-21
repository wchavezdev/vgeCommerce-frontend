import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { GamesRoutingModule } from './games-routing.module';
import { GameListComponent } from './pages/game-list/game-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddGameComponent } from './pages/add-game/add-game.component';

@NgModule({
  declarations: [GameListComponent, AddGameComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgSelectModule,
  ],
})
export class GamesModule {}
