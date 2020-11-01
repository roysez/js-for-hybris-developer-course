import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AdminAuthService} from "./admin-auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private adminAuthService : AdminAuthService,private router : Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.adminAuthService.isAuthenticated().then(isAuth => {
      if(isAuth)
        return true;
      else
        this.router.navigate(['/admin/login'],{
          queryParams: {
            auth : false
          }
        })
    });
  }

}
