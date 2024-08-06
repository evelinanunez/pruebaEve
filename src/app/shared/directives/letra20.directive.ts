import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLetra20]'
})
export class Letra20Directive {

  constructor(
    private elementRef : ElementRef,
    private render: Renderer2
  ) {
    this.render.setStyle(this.elementRef.nativeElement,'font-size', '20px');
  }

}
