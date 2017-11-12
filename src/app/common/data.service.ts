import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppError} from './app-error';
import {NotFoundError} from './not.found.error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import {InternalServerError} from './internal.server.error';

@Injectable()
export class DataService {

  constructor(private url: string,
              private http: Http) {
  }

  public list() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  public create(resource) {
    // return Observable.throw(new AppError());
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  public update(resource) {
    // Patch is great when the modification is for only a few properties of a large object
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRed: true}))
      .map(response => response.json())
      .catch(this.handleError);
    // this.http.put(this.url + '/' + resource.id, JSON.stringify(resource)).subscribe(response => {
    //   console.log(response.json())
    // })
  }

  public delete(id: number) {
    // return Observable.throw(new AppError());
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError)
  }

  // public delete(id: number) {
  //   return this.http.delete(this.url + '/' + id)
  //     .map(response => response.json())
  //     .toPromise()
  //     .catch(this.handleError)
  // }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new InternalServerError(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }

}
