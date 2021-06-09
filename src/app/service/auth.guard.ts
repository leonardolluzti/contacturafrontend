import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){
    console.log('teste');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{
    if(localStorage.getItem('token')) != null{
      return true;
    }else{
      this.router.navigate(['/login']);
    }
  }
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmim implements CanActivate {
  constructor(private router: Router){
    console.log('teste');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{
    if(localStorage.getItem('token')) != null && localStorage.getItem('admin') == 'true'){
      return true;
    }else{
      this.router.navigate(['/login']);
    }
  }
  
}