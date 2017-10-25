import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('favourite')
  public favourite = false;

  @Input('likes')
  public likesCount: number;

  @Output('change')
  public change = new EventEmitter();

  public click() {
    this.favourite = !this.favourite;
    this.likesCount += this.favourite ? 1 : -1;
    this.change.emit(this.likesCount);
  }

}

export interface LikesChangeEventArg {
  body: string;
  liked: boolean;
  likesCount: number;
}
