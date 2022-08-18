import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';


import { RegisterComponent } from './component/register/register.component';


import { Login3Component } from '../auth/component/login3/login3.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
// import { AuthInterceptorService } from './service/auth-intercept-service.service';


@NgModule({
  declarations: [
    Login3Component,
    RegisterComponent,
    // CartComponent
    
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

    
  ],
  exports: [
    Login3Component,
    RegisterComponent,
    // CartComponent
  ]

})

export class AuthModule { }
