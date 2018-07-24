import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntitiesListComponent } from './entities/list/list.component';
import { AddEntitiesComponent } from './entities/add/add.component';
import { MainReportComponent } from './reports/main/main-report.component';

const routes: Routes = [
    { path: '', redirectTo: 'entities', pathMatch: 'full' },
    { path: 'entities', component: EntitiesListComponent },
    { path: 'entity/add', component: AddEntitiesComponent },
    { path: 'entity/:id', component: AddEntitiesComponent },
    { path: 'reports', component: MainReportComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
