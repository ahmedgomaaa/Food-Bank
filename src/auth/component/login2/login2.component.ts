import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  
  messageclass = ''
  message = ''
  Customerid: any;
  editdata: any;
  responsedata: any;

  constructor(private service: AuthService,private route:Router) {
    localStorage.clear();

   }


   Login = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });


  ngOnInit(): void {
  }



  ProceedLogin() {
    if (this.Login.valid) {
      this.service.ProceedLogin(this.Login.value).subscribe(result => {
        if(result!=null){
          this.responsedata=result;
          localStorage.setItem('token',this.responsedata.jwtToken)
          this.route.navigate([''])
        }

      });
    }
  }

}
