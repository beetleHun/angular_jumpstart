import {Component, OnInit} from '@angular/core';
import {FollowersService} from './followers.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  public followers: Array<any>;

  constructor(private route: ActivatedRoute,
              private service: FollowersService) {
  }

  ngOnInit() {

    Observable.combineLatest([this.route.paramMap, this.route.queryParamMap])
      .switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        // this.service.getAll({id: id, page: page});

        return this.service.list();
      })
      .subscribe(followers => {
        this.followers = followers;
      });

    this.service.list().subscribe(
      followersList => this.followers = followersList);
  }

}
