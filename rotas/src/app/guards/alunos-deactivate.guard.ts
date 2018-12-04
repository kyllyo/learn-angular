
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { FormCanDeactivate } from "./form-candeactivate";


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate <FormCanDeactivate> {

    canDeactivate( component: FormCanDeactivate,
         route: ActivatedRouteSnapshot, state: RouterStateSnapshot
        ) : Observable<boolean> | Promise<boolean> | boolean {
            //console.log('guarda de desativacao')

            //return component.podeMudarRota();
            return component.podeDesativar();
    }
  
}