import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpclient : HttpClient) { }

  login(email :any,password:any){
    let authCredentials = {email:email,password:password};
    return this._httpclient.post<any>(environment.apiBaseUrl + '/getusers',authCredentials)
  }
}
