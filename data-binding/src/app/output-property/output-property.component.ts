import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number  = 0;

  @Output()
  mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorIput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  incrementa(){
    this.campoValorIput.nativeElement.value++;
    //this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
    console.log(this.campoValorIput)
  }
  decrementa(){
    this.campoValorIput.nativeElement.value--;
    //this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
    console.log(this.campoValorIput.nativeElement.value)
  }



}
