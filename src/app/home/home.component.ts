import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import {DataViewLayoutOptions} from 'primeng/dataview';
import { CartService } from '../cart/cart.service';
import { CartComponent } from '../cart/cart.component';



export class Product {  
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public image: string,
    public description: string,
    public boughtItemsCount: string,
    public category: string,
    public addedToCart: boolean,
    public qtyTotal: number
  
  ) {
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CartService]
})
export class HomeComponent implements OnInit {


  product: Product[];

  constructor(
    private http: HttpClient,
    private cartService: CartService
  
  ) { }

  ngOnInit(): void {
    this.getProduct();
    
  }
  // token = localStorage.getItem('token');
  heads = { 
    // 'Content-Type': 'application/json;charset=UTF-8',
    // "Access-Control-Allow-Origin": "*",
    "Accept" : "*/*",
    "Aceept-Encoding" : "gzip,deflate,br",
    // "Connection" : "keep-alive",
    "Authorization": localStorage.getItem('token'),
    // "User-Agent" : "PostmanRuntime/7.29.2" ,
    "Access-Control-Allow-Origin": "localhost:80",
    // "Cookie" : "JSESSIONID=E36E1CEDF1E2DE0A6870BF72ADE9670A"
    "mode": "no-cors"

    

    
    }  


  getProduct(){
    this.http.get<any>(
      
      'http://localhost:4200/assets/data.json' 
      // 'https://foodapplicationecomercial.herokuapp.com/Home/allFoodProducts' , {headers: this.heads}
    ).subscribe(
      response => {
        console.log(response);
        this.product = response;
      },
      error => {
        console.log(error);
      }

    );
  }

  addToCart(product: Product){
    product.addedToCart = true;
    this.cartService.addToCart(product);
  }
 
}




export interface Car {
  vin;
  year;
  brand;
  color;
}