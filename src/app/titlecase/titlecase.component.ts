import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titleCase',
  templateUrl: './titlecase.component.html',
  styleUrls: ['./titlecase.component.css']
})
export class TitleCaseComponent implements OnInit {
  public title;

  constructor() { }

  ngOnInit() {
  }

}
