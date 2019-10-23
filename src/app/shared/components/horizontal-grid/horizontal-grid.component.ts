import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostBinding,
  Renderer2, AfterViewInit, AfterContentInit } from '@angular/core';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return 'minmax(auto, max-content)';
  }

  public get templateCols(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols} * 0.4rem) / ${this.displayCols}))`;
  }


  constructor(
    private elr: ElementRef,
    private rd2: Renderer2

  ) {
    console.log(this.elr.nativeElement);
  }
  ngOnInit() {
    // this.rd2.setStyle(this.elr.nativeElement, 'display', 'flex');
  }
  ngAfterContentInit(): void {
    // this.rd2.setStyle(this.elr.nativeElement, 'display', 'flex');
  }
  ngAfterViewInit() {
    // this.rd2.setStyle(this.elr.nativeElement, 'display', 'flex');
  }

  handleScroll(evt) {
    this.sliderMargin = `0 ${100 * evt.target.scrollLeft / evt.target.scrollWidth}%`;
    console.log('sliderMargin', this.sliderMargin)
  }
}
