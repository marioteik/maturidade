import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesListComponent } from './list/list.component';
import { AddEntitiesComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    EntitiesListComponent,
    AddEntitiesComponent
  ]
})
export class EntitiesModule { }
