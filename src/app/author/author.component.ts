import {Component, OnInit} from '@angular/core';
import {AuthorService} from './author.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  public authors: Array<string>;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authors = this.authorService.getAuthors();
  }

}
