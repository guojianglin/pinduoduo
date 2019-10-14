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
  // @HostBinding('style.display') display = 'block';


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
}
