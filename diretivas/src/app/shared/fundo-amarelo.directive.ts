import { Directive, ElementRef, Renderer } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { 
    //console.log(this._elementRef)
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'; --vulneravel
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'backgroundColor','yellow')
    this._renderer.setElementProperty(this._elementRef.nativeElement,'title','lero lero')
    
  }

}


