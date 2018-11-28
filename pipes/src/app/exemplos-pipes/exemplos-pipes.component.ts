import { Component, OnInit } from '@angular/core';

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

}
