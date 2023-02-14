import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { InscriptionModelModule } from '../inscription-model/inscription-model.module';
import { AllPostModule } from '../all-post/all-post.module';



@Injectable({
  providedIn: 'root'
})
export class RequeteApiService  {

  constructor(private http: HttpClient) { }


  InscriptionUser(email:string, password: string, confirmPassword: string, name: string, lastName: string): Observable<InscriptionModelModule> {
    return this.http.post<InscriptionModelModule>("http://localhost:3000/api/signUp", {email,password,confirmPassword,name,lastName})
    .pipe(

      catchError(this.handleError)
    )
  }

  ConnexionUser(email: string, password: string): Observable<InscriptionModelModule>{
    return this.http.post<InscriptionModelModule>("http://localhost:3000/api/signIn", {email,password}
    )
    .pipe(
      catchError(this.handleError)
    )
  }

  getAllPost(): Observable<AllPostModule[]>{
    return this.http.get<AllPostModule[]>('http://localhost:3000/api/' )
    .pipe(
      catchError(this.handleError)
    )

  }

  //message error
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
       return throwError(() => new Error(error.error));
  }



}
