import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../servic/courses.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  providers: [CoursesService],
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  course?: any;
  courseId?: any;
  RouteParamsObs?: any;
  editMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servic: CoursesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.course = this.activatedRoute.snapshot.params['id'];
    // this.course= this.servic.courses.find(x=> x.id==this.courseId);
    this.RouteParamsObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.servic.courses.find((x) => x.id == this.courseId);
    });

    //snapshot pro
    //  this.editMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit')) ;
    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    });
  }
  ngOnDestroy() {
    this.RouteParamsObs.unsubscribe();
  }
  appendQueryParams() {
    this.router.navigate(['/course-details', this.courseId], {
      queryParams: { edit: true },
    });
  }
}
