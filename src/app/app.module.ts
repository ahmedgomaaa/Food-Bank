import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { MenuModule } from 'primeng/menu';
// 
import { StoreModule } from '@ngrx/store';
import { isLoggedInReducer } from './isLoggedIn.reducer';
// 
import { ButtonModule } from 'primeng/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from 'src/auth/component/register/register.component';
import { Login3Component } from '../auth/component/login3/login3.component';
import { dviewComponent } from './dview/dview.component';
import { AuthModule } from '../auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataView, DataViewModule } from 'primeng/dataview';
import { DataViewLayoutOptions } from 'primeng/dataview';
import { ProductService } from './dview/product.service';

import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { AuthGuard } from 'src/auth/service/auth.guard';
import { AuthService } from 'src/auth/service/auth.service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from './cart/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardsComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    dviewComponent,
    CartComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 
    StoreModule.forRoot({ isLoggedIn: isLoggedInReducer }),
    //  
    TabMenuModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    DataViewModule,
    ButtonModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    MenuModule
    
    
  ],
  providers: [AuthGuard , CurrencyPipe, CartService],
  bootstrap: [AppComponent,]
})
export class AppModule { 

loggedinstat = AuthService.loggedinstat;


}
