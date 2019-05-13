import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>
  constructor(private _httpclient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  getCurrentUserValue() {
    return this.currentUserSubject.value;
  }
  login(email: any, password: any) {
    let authCredentials = { email: email, password: password };
    // return this._httpclient.get<any>(environment.apiBaseUrl + '/getusers')
    return this._httpclient.post<any>(environment.apiBaseUrl + '/authenticate', authCredentials)
  }

  setAuthData(currentUserData: any) {
    console.log(currentUserData.token);
    localStorage.setItem('token', currentUserData.token);
    localStorage.setItem('currentUser', JSON.stringify(currentUserData.user));
    this.currentUserSubject.next(currentUserData);
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }
  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    // remove user from local storage to log user out
    this.clearAuthData();
    this.currentUserSubject.next(null);
  }
}
