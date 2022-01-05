import { Directive, ElementRef, HostListener, Input, Renderer } from "@angular/core";

@Directive({
  selector: '[apDarkenOnHover]' // Selector de diretivas precisam estar entre '[]'
})
export class DarkenOnHoverDirective {

  @Input() brightness = '70%';

  constructor(
    private el: ElementRef, // ElementRef da uma referencia do elemento da DOM em que a diretiva foi adicionada
    private render: Renderer // Permite a manipulação da DOM, porém garante que não ocorrerá nenhum problema ao renderizar no lado do servidor, pois lá não existe DOM
  ) { }

  @HostListener('mouseover') // Indica o evento do elemento hospedeiro da diretiva que deve responder
  darkenOn() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkeOff() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
