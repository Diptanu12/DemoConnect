import { Component, OnInit } from '@angular/core';
import { CoursesService } from './servic/courses.service';
import { ActivatedRoute,Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoursesService]
})
export class AppComponent implements OnInit {
  title = 'AngularRouting';
  displayLoadingIndicator = false;

  constructor(private activatedroute : ActivatedRoute, private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    this.activatedroute.fragment.subscribe((value)=>{
this.jumpTo(value);
    });

    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.displayLoadingIndicator=true;
      }

      if(routerEvent instanceof NavigationEnd){
        this.displayLoadingIndicator=false;
      }
    });
  }

  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior : 'smooth'})
  }

  login(){
this.authService.login();
  }
  logout(){
    this.authService.logout();
  }
}
