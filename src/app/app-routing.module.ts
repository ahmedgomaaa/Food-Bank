import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login3Component } from 'src/auth/component/login3/login3.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from '../auth/auth.module';
import { dviewComponent } from './dview/dview.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from 'src/auth/service/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from 'src/auth/component/register/register.component';

const routes: Routes = [

  {
    path: 'authenticate',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
    
  }
  ,
  { path : 'home', component : HomeComponent },
  { path : 'about-us', component : AboutUsComponent },
  { path : 'contact-us', component : ContactUsComponent },
  { path : 'login', component: Login3Component },
  {path : 'register', component: RegisterComponent},
  { path : 'cart', component: CartComponent ,
   canActivate: [AuthGuard]
   },
  { path : 'dview', component: dviewComponent },
  { path : '', component : HomeComponent },
  { path : '**', component : NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
