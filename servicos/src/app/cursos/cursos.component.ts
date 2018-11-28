import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.services'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  cursos: string[]= [];

  constructor(private cursosService: CursosService) {     
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
