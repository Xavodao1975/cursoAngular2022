import { Directive, ElementRef,OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResalta]'
})

export class ResaltaDirective implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2) 
  { 
    
    
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','yellow');
  }

}
