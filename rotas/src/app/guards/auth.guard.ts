import { Injectable } from '@angular/core';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private route: Router

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
      ) : Observable<boolean> | boolean {
        if(this.authService.usuarioEstaAutenticado()){
          return true;
        }
        this.route.navigate(['/login']);
        return false;
  }
}
