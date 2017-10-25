import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
  // ,
  // inner styles override the others defined in separate CSS file (order)
  // styles: [
  //     `
  //     .glyphicon {
  //       color: green;
  //     }
  //   `
  // ],
  // encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent {

  @Input('favourite')
  public favourite = false;

  @Output('change')
  public change = new EventEmitter();

  public click() {
    this.favourite = !this.favourite;
    this.change.emit({newValue: this.favourite});
  }

}

export interface FavouriteChangeEventArg {
  newValue: boolean;
}
