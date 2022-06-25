import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { GameCardComponent } from './components/game-card/game-card.component';


@NgModule({
  declarations: [
    LandingComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
