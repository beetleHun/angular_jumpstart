import {Injectable} from '@angular/core';

@Injectable()
export class CoursesService {

  public getCourses() {
    return ['author', 'author2', 'author3'];
  }
}
