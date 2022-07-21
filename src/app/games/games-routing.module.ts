import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { GameListComponent } from './pages/game-list/game-list.component';

const routes: Routes = [
  {
    path: '',
    component: GameListComponent,
  },
  {
    path: 'edit/:id',
    component: AddGameComponent,
  },
  {
    path: 'add',
    component: AddGameComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
