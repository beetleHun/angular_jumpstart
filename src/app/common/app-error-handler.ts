import {ErrorHandler} from '@angular/core';
export class AppErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    alert('An unhandled exception occurred!');
    console.log(error);
  }

}
