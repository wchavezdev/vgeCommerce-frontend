import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './marketplace/pages/landing/landing.component';
import { GameComponent } from './marketplace/pages/game/game.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'game/:id',
    component: GameComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import(/* webpackChunkName: "auth" */ './auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'games',
    loadChildren: () =>
      import(/* webpackChunkName: "games" */ './games/games.module').then(
        (m) => m.GamesModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
