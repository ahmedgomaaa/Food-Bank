import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static loggedinstat: boolean = false ;
  loggedinstat : boolean = false;
  // getAuthToken() {
  //   throw new Error("Method not implemented.");
  // }

  constructor(private http: HttpClient) {}
 
  login(user: any) {
    return this.http.post('http://localhost:8000/auth/login', user,{withCredentials:true});
  }
  getCookie (name: string) { 
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
    return 0;
  if (parts.length == 2) {
    return parts.pop().split(";").shift();
  } 

}

  loggedIn() {
    if (localStorage.getItem('token')) {
      this.loggedinstat = true;

      return true;

    }else{
    this.loggedinstat = false;

    return false;
  }

}


}

