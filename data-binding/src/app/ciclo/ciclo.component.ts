import { Component, OnInit, OnChanges, DoCheck, 
  AfterContentChecked, AfterContentInit, AfterViewInit, 
  AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit,
AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('construtor')
  }

  ngOnInit() {
    this.log('metodo oninit')
  }

  ngOnChanges(){    
    this.log('metodo onchanges')
  }

  ngDoCheck(){
    this.log('metodo docheck')
  }

  ngOnDestroy(){
    this.log('metodo ondestroy')
  }

  ngAfterViewInit(){
    this.log('metodo afterViewInit')
  }

  ngAfterContentInit(){
    this.log('metodo afterContentInit')
  }

  ngAfterContentChecked(){
    this.log('metodo afterContentCheck')
  }

  ngAfterViewChecked(){
    this.log('metodo -ngAfterViewChecked')
  }
  private log(hook: string){
    console.log(hook)
  }



}
