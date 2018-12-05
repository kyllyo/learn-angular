import { Injectable } from '@angular/core';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private route: Router

  ) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }

  private verificarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
      ) : Observable<boolean> | boolean {
      console.log('verificando se o usuario pode carregar o codigo do modulo canLoad')
      return this.verificarAcesso();
  }
}
