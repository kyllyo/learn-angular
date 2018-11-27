import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseover(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'backgroundColor','yellow')
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseleave') onmouseleave(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'backgroundColor','white')
    this.backgroundColor = 'orange'
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  private backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

}
