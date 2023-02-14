import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RequeteApiService } from '../requete/requete-api.service';


@Injectable({
  providedIn: 'root'
})
export class InterptorTokenService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error('Method not implemented.');

    if (localStorage.getItem("token") != "" ) {
      let token = localStorage.getItem("token") ;
      let jwtToken = req.clone({
        setHeaders: {
          Authorization: `Beare: ${token}`,
        }
      })
      return next.handle(jwtToken);
    }
    let token = '' ;
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: `Beare: ${token}`,
      }
    })
    return next.handle(jwtToken);
  }

  constructor() { }
}
