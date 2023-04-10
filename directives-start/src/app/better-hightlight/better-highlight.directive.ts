import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string = 'transparent';
  @Input() hightlightColor:string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColorProp: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColorProp = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColorProp = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColorProp = this.defaultColor;
  }

}
