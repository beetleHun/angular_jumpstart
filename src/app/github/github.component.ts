import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    // this.route.paramMap.subscribe(params => {
    //   let id = +params.get('id');
    //   console.log(id)
    // });
  }


  ngOnDestroy(): void {
  }

  public submit() {
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    })
  }
}
