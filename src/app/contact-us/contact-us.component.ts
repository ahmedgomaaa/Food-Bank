import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(  private http: HttpClient ,
    private router: Router

    ) { }

  ngOnInit(): void {
  }

  submit() : void {
  this.router.navigate(['/home']);


}
  

}
