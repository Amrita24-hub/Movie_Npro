import { Directive,ElementRef,Input,Renderer2,OnInit, HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective  implements OnInit{

  @Input() appHighlighter: string | null = null; // Color on hover
  private defaultColor: string | null = null;   // Original color
  
  constructor(private el: ElementRef, private renderer: Renderer2) { 
  this.defaultColor = this.el.nativeElement.style.backgroundColor;
  }

  ngOnInit() {
    this.highlight(this.appHighlighter);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlighter);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor);
  }
  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color || 'yellow');
  }

}

