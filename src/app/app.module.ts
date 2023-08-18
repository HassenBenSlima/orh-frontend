import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SignupComponent} from "./pages/signup/signup.component";
import {OffersComponent} from "./pages/offers/offers.component";
import {LoginComponent} from "./pages/login/login.component";
import {ToolbarComponent} from "./pages/navigation/toolbar/toolbar.component";
import {SidenavListComponent} from "./pages/navigation/sidenav-list/sidenav-list.component";
import {AccomodationComponent} from "./pages/accomodation/accomodation.component";
import {NavtabsComponent} from "./pages/navigation/navtabs/navtabs.component";
import {FoodBeverageComponent} from "./pages/food-beverage/food-beverage.component";
import {LifestyleComponent} from "./pages/lifestyle/lifestyle.component";
import {CelebrationsComponent} from "./pages/celebrations/celebrations.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./pages/app-routing/app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {HomeComponent} from "./pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    OffersComponent,
    HomeComponent,
    LoginComponent,
    ToolbarComponent,
    SidenavListComponent,
    AccomodationComponent,
    NavtabsComponent,
    FoodBeverageComponent,
    LifestyleComponent,
    CelebrationsComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
