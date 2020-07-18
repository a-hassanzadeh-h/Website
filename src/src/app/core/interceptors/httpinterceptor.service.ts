import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
      let errorMessage = this.handelError(error)
      return throwError(errorMessage);
    }));
  }

  private handelError(error: HttpErrorResponse): string {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) return 'A Client side error occurred'
    console.log(error);
    switch (error.status) {
      case 404:
        errorMessage = 'The url could not be found';
        break;
      case 401:
        errorMessage = 'Not authorized to access resources';
        break;
      case 403:
        errorMessage = 'Missing permission';
        break;
      case 500:
        errorMessage = "Internal server error occurred";
        break;
      default:
        errorMessage = 'An unknown http error has occurred';
        break;
    }

    return errorMessage;
  }
}
