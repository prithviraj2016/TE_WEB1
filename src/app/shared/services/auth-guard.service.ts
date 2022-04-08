import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
        this.router = router;
    }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log(123)
        const loggedUser = localStorage.getItem('loggeduser');
            if (loggedUser =="" || loggedUser==null) {
              this.router.navigate(['signin']);
              return false;
            } else {
              return true;
            }


    }
}



