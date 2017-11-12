import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not.found.error';
import {InternalServerError} from '../common/internal.server.error';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts: any[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.list().subscribe(posts => this.posts = posts);
  }

  public create(input: HTMLInputElement) {
    let post = {title: input.value};
    this.posts.splice(0, 0, post);
    input.value = '';

    this.postService.create(post).subscribe(
      (resultPost: { id }) => {
        post['id'] = resultPost.id;
      },
      (error: AppError) => {
        this.posts.slice(0, 1);

        if (error instanceof InternalServerError) {
          alert('Object already exists!');
        } else {
          throw error;
        }
      });
  }

  public update(post) {
    this.postService.update(post).subscribe(resultPost => console.log(resultPost));
  }

  public remove(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id).subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('This post has already been deleted!');
        } else {
          throw error;
        }
      });
  }

  // public remove(post) {
  //   this.postService.delete(post.id);
  // }

}
