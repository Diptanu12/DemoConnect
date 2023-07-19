import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseGuardService } from './course-guard.service';
import { CanDeactivateGuardService } from './candeactivate-guard-service';



const appRoute : Routes = [
    {path: '', component:HomeComponent},
    {path: 'Home', component: HomeComponent},
    {path : 'About', component: AboutComponent},
    {path : 'Contact', component: ContactComponent, canDeactivate:[CanDeactivateGuardService]},
    {path : 'Courses', component: CoursesComponent},
    {path :'course-details/:id',component:CourseDetailsComponent, canActivate:[CourseGuardService]},
    // {path: 'course-details', children:[
    //   {path: 'course-details/:id', component:CourseDetailsComponent}
    // ]},
    
    {path: '**', component: ErrorComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute, {enableTracing : true})
    ],
    exports: [
        RouterModule
    ]
 
})


export class AppRoutingModule{

}