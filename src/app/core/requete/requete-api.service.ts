import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { InscriptionModelModule } from '../inscription-model/inscription-model.module';
import { AllPostModule } from '../all-post/all-post.module';
import { PostModelModule } from '../post-model/post-model.module';
import { ModelFriendModule } from '../model-friend/model-friend.module';
import { ModelConversationModule } from '../model-conversation/model-conversation.module';





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
  getFriendUser(id:any): Observable<ModelFriendModule[]>{
    return this.http.get<ModelFriendModule[]>(`http://localhost:3000/api/friend/${id}` )
    .pipe(
      catchError(this.handleError)
    )
  }
  getAllConversationUser(): Observable<ModelConversationModule[]>{
    return this.http.get<ModelConversationModule[]>(`http://localhost:3000/api/conversation` )
    .pipe(
      catchError(this.handleError)
    )
  }

  getPostprofilUser(id: any): Observable<PostModelModule[]> {
    console.log(`http://localhost:3000/api/profil/${id}`)
    return this.http.get<PostModelModule[]>(`http://localhost:3000/api/profil/${id}`, )
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
