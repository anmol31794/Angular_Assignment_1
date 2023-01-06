import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMonsterComponent } from './add-monster/add-monster.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'details/:id', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) , pathMatch: 'prefix'  },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddMonsterComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
