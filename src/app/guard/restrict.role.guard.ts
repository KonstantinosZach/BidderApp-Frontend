import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {authService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class RestrictRoleGuard implements CanActivate {

  constructor(private router: Router, private authService: authService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isAuthorized = this.authService.getRoles().includes(route.data["role"]);
    if(isAuthorized) {
      console.log(route.url)
      this.router.navigate([`/` + route.url[0] + `/` + route.url[1]]);
      return false;
    }

    return true;
  }
}
