import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { cookies } from './cookies.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  cookies: any;
 
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      console.log(this.authService.loggedIn());
      return true;
    } else {
      console.log(this.authService.loggedIn());
      alert('Please Sign in First to see cart');

      this.router.navigate(['/login']);
      return false;
    }
  }

}
