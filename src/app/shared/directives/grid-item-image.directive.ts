import { Directive, ElementRef, Renderer2, Input, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  @HostBinding('style.grid-area') gridArea = 'image';
  @Input() @HostBinding('style.font-size') appGridItemImage = '1rem';
  constructor(
    private elr: ElementRef,
    private rd2: Renderer2,
  ) {}

  ngOnInit() {
    // this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
    // this.rd2.setStyle(this.elr.nativeElement, 'font-size', this.appGridItemImage);

  }
  @HostListener('click', ['$event.target'])
  handle() {
    console.log('HostListener work!!!!');
  }

}
