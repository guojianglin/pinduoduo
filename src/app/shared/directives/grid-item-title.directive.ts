import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective implements OnInit {

  constructor(
    private elr: ElementRef,
    private rd2: Renderer2,
  ) {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
  }
  ngOnInit() {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
  }
}
