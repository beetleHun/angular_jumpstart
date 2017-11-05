import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  public form;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // this.form = new FormGroup({
    //   name: new FormControl(),
    //   contact: new FormGroup({
    //     email: new FormControl(),
    //     phone: new FormControl()
    //   }),
    //   topics: new FormArray([])
    // });

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      contact: this.formBuilder.group({
        email: [],
        phone: []
      }),
      topics: this.formBuilder.array([])
    });

  }






  public get topics() {
    return this.form.get('topics') as FormArray;
  }

  public addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  public removeTopic(index: number) {
    this.topics.removeAt(index);
  }

}
