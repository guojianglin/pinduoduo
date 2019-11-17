import { Directive, ElementRef, Renderer2, Input, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  @HostBinding('style.grid-area') gridArea = 'image';
  @Input() @HostBinding('style.font-size') appGridItemImage: string;
  @Input() gridLimit: string;
  constructor(
    private elr: ElementRef,
    private rd2: Renderer2,
  ) {}

  ngOnInit() {
    // this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
    // this.rd2.setStyle(this.elr.nativeElement, 'font-size', this.appGridItemImage);
    this.setStyle('width', this.gridLimit);
    this.setStyle('height', this.gridLimit);
    this.setStyle('object-fit', 'cover');

  }

  private setStyle(styleName: string, styleValue: string | number) {
    this.rd2.setStyle(this.elr.nativeElement, styleName, styleValue);
  }

  @HostListener('click', ['$event.target'])
  handle() {
    console.log('HostListener work!!!!');
  }

}
