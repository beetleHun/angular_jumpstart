import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title')
  public title: string;

  public clicked: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  public onClick() {
    this.clicked = !this.clicked;
  }

}
