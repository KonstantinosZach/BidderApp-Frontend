import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute} from '@angular/router';
import {authService} from "../auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: authService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let username = route.params['username'];
    if(this.authService.getToken() && username == this.authService.getUserName()){
      return true;
    }

    this.router.navigate(['/log-in-user']);
    return false;
  }
}
