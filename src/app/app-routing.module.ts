import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameComponent} from './game/game.component';

const routes: Routes = [
  { path: ':width/:height', component: GameComponent },
  { path: '', redirectTo: '50/50', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
