import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public clicked = false;

  constructor() {
  }

  ngOnInit() {
  }

  public click() {
    this.clicked = !this.clicked;
  }

}
