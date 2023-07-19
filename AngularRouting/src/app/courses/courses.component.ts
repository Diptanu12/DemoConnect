import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../servic/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],

})
export class CoursesComponent {



  courses = [
    {
      id: 101, name:'Javascript', author: 'Diptanu', duration: 75, type:'Free',
      price: 0.00, rating: 3.5, image:'https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg', description : 'In this course you will learn the fundamentals of Angular framework.'
    },
    {
      id: 104, name:'Angular', author: 'Diptanu', duration: 56, type:'Premium',
      price: 145.50, rating: 3.5, image:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*lqMtWmTLHxT_6SN4Kjvaog.png', description : 'In this course you will learn the fundamentals of Angular framework.'
    },
    {
      id: 103, name:'Bootstrap', author: 'Diptanu', duration: 70, type:'Free',
      price: 0.00, rating: 3.5, image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png', description : 'In this course you will learn the fundamentals of Angular framework.'
    },
    {
      id: 104, name:'Angular', author: 'Diptanu', duration: 56, type:'Premium',
      price: 145.50, rating: 3.5, image:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*lqMtWmTLHxT_6SN4Kjvaog.png', description : 'In this course you will learn the fundamentals of Angular framework.'
    },
    {
      id: 105, name:'React', author: 'Diptanu', duration: 15, type:'Free',
      price: 0.00, rating: 3.5, image:'https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp', description : 'In this course you will learn the fundamentals of Angular framework.'
    },
  ]

}
