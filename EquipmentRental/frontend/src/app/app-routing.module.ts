import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RentalComponent } from './rental/rental.component';
import {RegisterComponent} from "./register/register.component";
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: RentalComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
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
