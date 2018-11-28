import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Aprendendo Java - estrutura de dados e padrões de projeto',
    rating: 4.555555,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5,23), // Indice do mes é 0. essa data é 23 de junho de 2016
    url: 'http://livrobom.com.br'
  };

  livros: string[] = ['Java','Angular 2'];
  filtro: string;

  constructor() { }

  ngOnInit() {
  }

  addCurso(newCurso: string){
    console.log(newCurso)
    this.livros.push(newCurso)
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros
    }
    return this.livros.filter((v) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000)
  } );

  valorAsync2 = interval(2000).pipe(map(res => 'Valor assincrono 2') )

}
