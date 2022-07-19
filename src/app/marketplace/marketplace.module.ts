import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GameCardComponent } from './components/game-card/game-card.component';

import { LandingComponent } from './pages/landing/landing.component';
import { GameComponent } from './pages/game/game.component';
import { GameSkeletonComponent } from './components/game-skeleton/game-skeleton.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    LandingComponent,
    GameCardComponent,
    GameComponent,
    GameSkeletonComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    FontAwesomeModule,
  ],
})
export class MarketplaceModule {}
