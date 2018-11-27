import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    private cursos: string[] = ['Angular 2', 'Java','.NET'];

    constructor(){
        console.log('singleton')
    }

    getCursos(): string[]{
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
    }

}