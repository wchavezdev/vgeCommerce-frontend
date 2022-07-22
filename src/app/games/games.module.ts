import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { GamesRoutingModule } from './games-routing.module';
import { GameListComponent } from './pages/game-list/game-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { FormSkeletonComponent } from './components/form-skeleton/form-skeleton.component';

@NgModule({
  declarations: [GameListComponent, AddGameComponent, FormSkeletonComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgSelectModule,
    NgxSkeletonLoaderModule,
  ],
})
export class GamesModule {}
