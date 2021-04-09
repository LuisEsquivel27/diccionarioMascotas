import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Paso por el interceptor');

    const headers = new HttpHeaders({
      'x-api-key': '1f6ba53c-7b1f-46c2-bcac-17f6afc5e846'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }
  constructor() { }

  // tslint:disable-next-line:typedef
  manejarError(error: HttpErrorResponse) {
    console.log('sucedio un error');
    return throwError('Error personalizado');
  }
}
