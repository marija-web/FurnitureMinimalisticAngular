import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(@Inject('url') public url: string, protected http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<T[]>(this.url).pipe(
      catchError(error => {
        return throwError(error.error);
      })
    );
  }
}
