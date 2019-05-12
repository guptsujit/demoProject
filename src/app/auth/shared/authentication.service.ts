import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private _httpclient: HttpClient) { }

  login(email: any, password: any) {
    let authCredentials = { email: email, password: password };
    return this._httpclient.get<any>(environment.apiBaseUrl + '/getusers')
     //return this._httpclient.post<any>(environment.apiBaseUrl + '/authenticate',authCredentials)
  }

  setAuthData(currentUserData: any) {
    console.log(currentUserData.token);
    localStorage.setItem('token', currentUserData.token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  logout() {
    // remove user from local storage to log user out
    this.deleteToken();
  }
}
