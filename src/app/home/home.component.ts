import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import {DataViewLayoutOptions} from 'primeng/dataview';



export class Product {
  constructor(
    public title: number,
    public name: string,
    public cost: number,
    public quantity: number,
    public locationId: number,
    public familyId: number,
    public image: string
  ) {
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  product: Product[];

  constructor(
    private http: HttpClient
  
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }


  getProduct(){
    this.http.get<any>('https://fakestoreapi.com/products?limit=100').subscribe(
      response => {
        console.log(response);
        this.product = response;
      }
    );
  }


 
}


export interface Car {
  vin;
  year;
  brand;
  color;
}