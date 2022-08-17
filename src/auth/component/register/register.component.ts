import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { setCookie } from 'src/auth/service/cookies.service';
import { Login3Component } from '../login3/login3.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form : FormGroup ;
constructor(    
  
  private formBuilder : FormBuilder,
  private http: HttpClient ,
  private router: Router
   ) { }

ngOnInit(): void {  

  this.form = this.formBuilder.group({

    email:'',
    username:'',
    password:''


  })
}

popup = false;
popup2 = false;
heads = { 
'Content-Type': 'application/json;charset=UTF-8',
"Access-Control-Allow-Origin": "*",
"Accept" : "*/*",
"Aceept-Encoding" : "gzip,deflate,br"
}  

  
submit() : void {
  console.log("RAW VALUE IS:");
  console.log(this.form.getRawValue());

  this.http.post("https://foodapplicationecomercial.herokuapp.com/Home/Register" ,
   this.form.getRawValue(), {responseType: 'json' , headers: this.heads}
  ).subscribe(
      res => {  
        this.router.navigate(['login'], {queryParams: { registered: 'true' } });
        this.router.navigate(['/login']); 
        console.log("The Register Respone is: ");
        // console.log(res.text);
        // if(res.text == "User registered successfully")

      },
      (error:any) => {
        // console.log(error)
        // const fieldValues = JSON.parse((error.text))

        // let keys = Object.keys(fieldValues);
        
        // let ErrMsg = (""+ Object.keys(fieldValues).map(key => fieldValues[key]));
        // console.log("ERR MSG IS AS TEXT : ");

        // console.log(error.error.text );
        if(error.error.text == "User registered successfully")
        {
          this.router.navigate(['login'], {queryParams: { registered: 'true' } });
          this.router.navigate(['/login']); 
        }
        else
        {
          this.popup2 = true;
        }

        
      }
  )
}
setPopup() : void {
  this.popup = true;
 
}
}
