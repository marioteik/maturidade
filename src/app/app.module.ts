import { UtilsService } from './services/utils.service';
import { EntityService } from './services/entity.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntitiesModule } from './entities/entities.module';
import { HttpClientModule } from '@angular/common/http';
import { BaseHttpService } from './services/base-http.service';
import { HttpHandlerService } from './services/http-handler.service';
import { COMPONENTS } from './shared/component.shared';

@NgModule({
    declarations: [
        AppComponent,
        COMPONENTS
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        EntitiesModule,
        HttpClientModule
    ],
    providers: [
        EntityService,
        BaseHttpService,
        HttpHandlerService,
        UtilsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
