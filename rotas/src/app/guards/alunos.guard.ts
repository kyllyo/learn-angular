
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
        ) : Observable<boolean> | boolean {

        if(state.url.includes('editar')){
            //alert('Usuario sem acesso')
            //return false
        }

          return true;
    }
  
}