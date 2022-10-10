import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RentalComponent } from './rental/rental.component';
import {RegisterComponent} from "./register/register.component";
import { DetailComponent } from './detail/detail.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'equipment',
    component: RentalComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
