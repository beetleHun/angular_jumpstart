import { Component } from '@angular/core';
import {FavouriteChangeEventArg} from './favourite/favourite.component';
// import {LikesChangeEventArg} from './favourite/favourite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public post = {
    favourite: false
  };

  // public like: LikesChangeEventArg = {
  //   body: 'Body of likes component',
  //   liked: false,
  //   likesCount: 36
  // };
  //
  // public onLikesCountChange(likes: number) {
  //   this.like.likesCount = likes;
  // }

  public onFavouriteChange(eventArgs: FavouriteChangeEventArg) {
    console.log('Favourite changed ', eventArgs);
  }

}
