import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntitiesListComponent } from './entities/list/list.component';
import { AddEntitiesComponent } from './entities/add/add.component';

const routes: Routes = [
  { path: '', redirectTo: 'entities', pathMatch: 'full' },
  { path: 'entities', component: EntitiesListComponent },
  { path: 'entity/add', component: AddEntitiesComponent },
  { path: 'entity/:id', component: AddEntitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
