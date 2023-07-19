import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
// import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './candeactivate-guard-service';



// const appRoute : Routes = [
//   {path: '', component:HomeComponent},
//   {path: 'Home', component: HomeComponent},
//   {path : 'About', component: AboutComponent},
//   {path : 'Contact', component: ContactComponent},
//   {path :'course-details/:id',component:CourseDetailsComponent},
//   // {path: 'course-details', children:[
//   //   {path: 'course-details/:id', component:CourseDetailsComponent}
//   // ]},
//   {path : 'Courses', component: CoursesComponent},
//   {path: '**', component: ErrorComponent},



//]
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    CoursesComponent,
    CourseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  
  ],
  providers: [CourseGuardService,AuthService,CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
