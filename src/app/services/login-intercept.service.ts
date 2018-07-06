import { Injectable } from '@angular/core';
import {HttpEvent,HttpInterceptor,HttpHandler,HttpRequest} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginInterceptService implements HttpInterceptor {
  constructor() { }
  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const authReq = req.clone({headers:req.headers.set('headerName','headerValue')});
    return next.handle(authReq) 
    .pipe(catchError((error,caught) => {
      console.log("Error occured!");
      console.log(error);
      return throwError(error);
    }))
  }

}
