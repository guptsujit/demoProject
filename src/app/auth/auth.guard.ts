import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './shared/authentication.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor(private _authenticationService: AuthenticationService,private _router : Router) { 
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      console.log(this._authenticationService.getCurrentUserValue())
      const currentUser = this._authenticationService.getCurrentUserValue();
        if (currentUser) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
  }
  
}
