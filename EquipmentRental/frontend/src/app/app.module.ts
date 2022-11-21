import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalComponent } from './rental/rental.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailComponent } from './detail/detail.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { MatDialogModule } from '@angular/material/dialog';
import { ReservationComponent } from './reservation/reservation.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TeacherComponent } from './teacher/teacher.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { FilterNavComponent } from './filter-nav/filter-nav.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MerklisteComponent } from './merkliste/merkliste.component';
import { ContactTeacherComponent } from './contact-teacher/contact-teacher.component';
@NgModule({
  declarations: [
    AppComponent,
    RentalComponent,
    LoginComponent,
    DetailComponent,
    FileUploadComponent,
    MainNavComponent,
    HomeComponent,
    ReservationComponent,
    TeacherComponent,
    HelpPageComponent,
    FilterNavComponent,
    FooterComponent,
    FaqComponent,
    AboutComponent,
    ContactUsComponent,
    MerklisteComponent,
    ContactTeacherComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
