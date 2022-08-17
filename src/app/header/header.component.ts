import { Component, OnInit } from '@angular/core';
import { AuthGuard
 } from 'src/auth/service/auth.guard';
import { AuthService } from 'src/auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(  ) { }

  ngOnInit(): void {
  }
    loggedinstat : boolean = AuthService.loggedinstat;
  
   myFunction() {
    console.log(this.loggedinstat)
    var x = document.getElementById("login");
    

    if (AuthService.loggedinstat == true) {
      x.style.color = "blue";
    } else
    //  if( AuthService.loggedinstat === false)
    {
      x.style.color = "red";
    }
  }


}
