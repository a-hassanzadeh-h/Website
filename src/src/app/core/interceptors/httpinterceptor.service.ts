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
    let message;
    if (error.error instanceof ErrorEvent) return 'A Client side error occurred'

    switch (error.status) {
      case 404:
        message = '';
        break;
      case 401:
        message = '';
        break;
      case 403:
        message = '';
        break;
      case 500:
        message = "";
        break;
      default:
        message = '';
        break;
    }

    return message;
  }
}
