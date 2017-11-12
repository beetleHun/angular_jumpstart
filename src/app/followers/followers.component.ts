import {Component, OnInit} from '@angular/core';
import {FollowersService} from './followers.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  public followers: Array<any>;

  constructor(private service: FollowersService) {
  }

  ngOnInit() {
    this.service.list().subscribe(followersList => this.followers = followersList);
  }

}
