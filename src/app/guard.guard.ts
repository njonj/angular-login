import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private dataService: ApiService, private router: Router  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    // return true;

    const routeurl: string = state.url;
    return this.isLogin(routeurl);
  }
  isLogin(routeurl: string) {
    if (this.dataService.isLoggedIn()) {
      // authorized so return true
      return true;

    }
    this.dataService.redirectUrl = routeurl;
    // not logged in so redirect to login page
    this.router.navigate(['/login'], { queryParams: { returnUrl: routeurl } });
    return false;
  }
}
