

import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Aluno } from "../aluno";
import { AlunosService } from "../alunos.service";


@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
        ) : Observable<any> | any {
            let id = route.params['id'];
            return this.alunosService.getAluno(id)
    }
  
}