import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.html',
  styleUrls: ['./course-form.css']
})
export class CourseFormComponent implements OnInit {

  public categories = [];

  constructor() {
  }

  ngOnInit() {
    this.categories = [
      {id: 1, name: 'Development'},
      {id: 2, name: 'Arts'},
      {id: 3, name: 'Languages'},
    ];
  }

  public submit(course) {
    console.log(course);
  }

}
