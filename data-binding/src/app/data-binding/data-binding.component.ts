import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: any = 'http://loiane.com'
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/Dummy-Text/'
  valorAtual: string
  valorSalvo: string
  isMouseOver:boolean = false
  nome: string = 'abc';

  nomeDoCurso: string = "Angular"

  valorInicial = 15;

  pessoa: any = {
    nome: 'asasdf',
    idade: 12
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

  botaoClicado(){
    alert('Botao foi clicado corretamente. Parabéns. A parada deu certo.');
  }
  onKeyUp(event: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement> event.target).value
    console.log((<HTMLInputElement> event.target).value)
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  getValor(){
    return 2 + 2;
  }

  getCurtirCurso(){
    return true;
  }

  onMudouValor(evento){
    console.log('aqui')
    console.log(evento.novoValor);
  }

}
