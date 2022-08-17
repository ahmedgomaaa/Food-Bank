import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { } from '@angular/common';
import { setCookie } from 'src/auth/service/cookies.service';


@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.scss']
})
export class Login3Component implements OnInit {
  [x: string]: any;

  // loginUser: any = {
  //   email: '',
  //   password: '',
  // };
  form : FormGroup ; 
  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router:Router,
    private auth:AuthService
  ) {

   }
;


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email:'',
      password:''
    })

  } 

   headers = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8',
    'myCustomHeader':'itsolutionstuff.com',
    'SameSite':'None'
  });

 requestOptions = { headers: this.headers };
  

  // login() {
  //   this.auth.login(this.loginUser).subscribe(
  //     {
  //       next: () => {
  //         alert('login success');
  //       },
  //       error: () => {
  //         alert('login failed');
  //       }
  //     }
  //   )
  // }

  popup = false;
  
   
submit() : void {
  console.log(this.form.getRawValue());

  this.http.get("https://foodapplicationecomercial.herokuapp.com/Home/login?email="+
  this.form.getRawValue().email+"&password="+this.form.getRawValue().password,this.form.getRawValue()
  ).subscribe(
      (res:any) => {
        console.log("The login Respone is: ");
        console.log(res);
        console.log(res.token)         
        // console.log(res.headers.get('Authorization'));


        const fieldValues = JSON.parse(JSON.stringify(res))

        let keys = Object.keys(fieldValues);
        
        let access_token = (""+ Object.keys(fieldValues).map(key => fieldValues[key]));


        localStorage.setItem('token',res.token);
        AuthService.loggedinstat = true;
       // setCookie("token", res.token);


        this.router.navigate(['/']);
      },
      error => {
        console.log("The Error is: ");
        console.log(error.error);
        this.setPopup();
      }
  )
}
setPopup() : void {
  this.popup = true;
}
}
