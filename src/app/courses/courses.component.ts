import {Component, OnInit} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  public title = 'Title of the page';
  public courses;
  public active;
  public email;
  public digit;
  public date;
  public sum;

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses();
  }

  ngOnInit(): void {
    this.active = false;
    this.email = 'test@domain.com';
    this.digit = 64.923823;
    this.date = new Date();
    this.sum = 'Yes I referred to the Tour of heroes tutorial because it does use a ngModel.';
  }

  public onSave(event) {
    event.stopPropagation();
    console.log('Click');
    console.log(event);
  }

  public onDivClicked() {
    console.log('Div was clicked');
  }

  public onKeyUp() {
    console.log(this.email);
  }

}
