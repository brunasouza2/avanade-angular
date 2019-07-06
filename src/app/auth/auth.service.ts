import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(email, password){
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDASBygEv7-k4mncTOMCU9v_WNVPwCxSKk',
    {email, password,});
  }

  createAccount(email, password){
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDASBygEv7-k4mncTOMCU9v_WNVPwCxSKk',
    {email, password,});
  }

  verifyToken(token){
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyDASBygEv7-k4mncTOMCU9v_WNVPwCxSKk',
    {
      idToken: token,
    });
  }

  logout(){

  }

  setUser(user){
    this.pUser.next(user);
  }
}
