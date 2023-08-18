import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { OffersComponent } from '../offers/offers.component';
import { SignupComponent } from '../signup/signup.component';
import { AccomodationComponent } from '../accomodation/accomodation.component';
import { FoodBeverageComponent } from '../food-beverage/food-beverage.component';
import { LifestyleComponent } from '../lifestyle/lifestyle.component';
import { CelebrationsComponent } from '../celebrations/celebrations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'food-beverage', component: FoodBeverageComponent },
  { path: 'celebrations', component: CelebrationsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }