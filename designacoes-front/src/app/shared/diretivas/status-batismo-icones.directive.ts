import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStatusBatismoIcones]'
})
export class StatusBatismoIconesDirective {

  @Input() appStatusBatismoIcones: boolean = false;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const icone = this.renderer.createElement('i');
    this.renderer.addClass(icone, 'fa-solid');
    
    if (this.appStatusBatismoIcones) {
      this.renderer.addClass(icone, 'fa-check');
      this.renderer.setStyle(icone, 'color', '#37c71a');
    } else {
      this.renderer.addClass(icone, 'fa-xmark');
      this.renderer.setStyle(icone, 'color', '#d0631b');
    }

    const divContainer = this.renderer.createElement('td');
    this.renderer.setStyle(divContainer, 'display', 'grid');
    this.renderer.setStyle(divContainer, 'place-content', 'center');
    this.renderer.appendChild(divContainer, icone);
    
    this.renderer.appendChild(this.el.nativeElement, divContainer);
  }

}
