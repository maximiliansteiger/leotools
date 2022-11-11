import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalComponent } from './rental/rental.component';
import { DetailComponent } from './detail/detail.component';
import {LoginComponent} from "./login/login.component";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {HomeComponent} from "./home/home.component";
import { ReservationComponent } from './reservation/reservation.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'help',
    component: HelpPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'equipment',
    component: RentalComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'upload',
    component: FileUploadComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
