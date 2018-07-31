import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntitiesListComponent } from './entities/list/list.component';
import { AddEntitiesComponent } from './entities/add/add.component';
import { MainReportComponent } from './reports/main/main-report.component';
import { PageNotFoundComponent } from './base-layout/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './base-layout/cards/cards.component';
import { FormsComponent } from './base-layout/form/form.component';
import { TableComponent } from './base-layout/table/table.component';
import { GraphicsComponent } from './base-layout/graphics/graphics.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'forms', component: FormsComponent},
    { path: 'cards', component: CardsComponent},
    { path: 'table', component: TableComponent},
    { path: 'graphics', component: GraphicsComponent},
    { path: 'entities', component: EntitiesListComponent },
    { path: 'entity/add', component: AddEntitiesComponent },
    { path: 'entity/:id', component: AddEntitiesComponent },
    { path: 'reports', component: MainReportComponent },
    //sempre tem que ser o ultimo
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
