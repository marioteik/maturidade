import {
  BrowserModule,
  BrowserTransferStateModule
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { EntitiesModule } from "./entities/entities.module";
import { HttpClientModule } from "@angular/common/http";
import { BaseHttpService } from "./services/base-http.service";
import { HttpHandlerService } from "./services/http-handler.service";

import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
//
import { UtilsService } from "./services/utils.service";
import { EntityService } from "./services/entity.service";
//
import { AppComponent } from "./app.component";
import { ALL_COMPONENTS } from "./components/shared.component";

@NgModule({
  declarations: [
    AppComponent,
    ALL_COMPONENTS
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EntitiesModule,
    HttpClientModule,
    BrowserTransferStateModule,
    FormsModule,
    NgbModule
  ],
  providers: [EntityService, BaseHttpService, HttpHandlerService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
