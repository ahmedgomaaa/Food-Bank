import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/app/cart/cart.component';
import { RegisterComponent } from 'src/auth/component/register/register.component';
import { AuthModule } from 'src/auth/auth.module';
import { Login3Component } from '../auth/component/login3/login3.component';


const routes: Routes = [
  {path:'login' , component:  Login3Component},
  {path:'register', component: RegisterComponent},
  {path:'cart' , component: CartComponent}
  // {path:'', redirectTo:'/home', pathMatch:'full'}
  // {path:'reset-password', component: ResetPasswordComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
