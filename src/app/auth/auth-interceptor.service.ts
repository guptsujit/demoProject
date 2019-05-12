import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from './shared/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private _authencationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = this._authencationService.getToken();
    if (token) {
      var req = req.clone({
        headers: req.headers.set("Authorization", "bearer " + token)

      })
     
    }
    return next.handle(req);
  }
}
