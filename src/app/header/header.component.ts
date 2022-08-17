import { Component, OnInit } from '@angular/core';
import { AuthGuard
 } from 'src/auth/service/auth.guard';
import { AuthService } from 'src/auth/service/auth.service';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login, Logout } from '../isLoggedIn.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<{ isLoggedIn: boolean }>, private auth: AuthService) {
    this.isLoggedIn$ = store.pipe(select('isLoggedIn'));
    if(this.auth.loggedIn()){
      this.store.dispatch(new Login());
    } else {
      this.store.dispatch(new Logout());
    }

  }

  ngOnInit(): void {
    this.myFunction();
  }
    loggedinstat : boolean = AuthService.loggedinstat;
  logout() {
    this.store.dispatch(new Logout());
  }
   myFunction() {

    // console.log(this.loggedinstat)

    // get isLoggedIn value if it is true print "true" else print "false"


    // var x = document.getElementById("login");
    var loginDOM = document.getElementById("login");
    var logoutDOM = document.getElementById("logout");

    // if store isLoggedIn is true, then show logout button
    // if (this.loggedinstat) {
    //   // document.getElementById("login").style.display = "none";
    //   // document.getElementById("logout").style.display = "block";
    // }

    this.isLoggedIn$.subscribe(value => {
    console.log("gg: ", value);

      if (value) {
        loginDOM.style.display = "none";
        logoutDOM.style.display = "block";
        
      } else {
        loginDOM.style.display = "block";
        logoutDOM.style.display = "none";
        
      }
    });

    // if(this.isLoggedIn$){
      
    // } else {
    //   x.style.color = "red";
    // }

    // if (AuthService.loggedinstat == true) {
    //   x.style.color = "blue";
    // } else
    // //  if( AuthService.loggedinstat === false)
    // {
    //   x.style.color = "red";
    // }
  }


}
