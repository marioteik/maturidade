import { HeaderComponent } from "../base-layout/header/header.component";
import { HeaderNotificationComponent } from "../base-layout/header-notification/header-notification.component";
import { HeaderProfileComponent } from "../base-layout/header-profile/header-profile.component";
import { NavbarTopComponent } from "../base-layout/navbar-top/navbar-top.component";
import { PageNotFoundComponent } from "../base-layout/page-not-found/page-not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MainReportComponent } from "../reports/main/main-report.component";
import { FooterComponent } from "../base-layout/footer/footer.component";
// import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsComponent } from "../base-layout/form/form.component";
import { CardsComponent } from "../base-layout/cards/cards.component";
import { TableComponent } from "../base-layout/table/table.component";
import { GraphicsComponent } from "../base-layout/graphics/graphics.component";
import { LoginComponent } from "../logincomponent/login.component";

export const ALL_COMPONENTS = [
    HeaderComponent,
    HeaderNotificationComponent,
    HeaderProfileComponent,
    NavbarTopComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    FormsComponent,
    CardsComponent,
    TableComponent,
    GraphicsComponent,
    RegisterComponent,
    DashboardComponent,
    MainReportComponent
]