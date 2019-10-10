import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostBinding, Renderer2, AfterViewInit, AfterContentInit } from '@angular/core';

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

  channels: Channel[] = [
    {
      id: 1,
      icon: 'icon-zhiwu',
      title: '植物',
      link: ''
    },
    {
      id: 2,
      icon: 'icon-naozhong',
      title: '闹钟',
      link: ''
    },
    {
      id: 3,
      icon: 'icon-qiche',
      title: '汽车',
      link: ''
    },
    {
      id: 4,
      icon: 'icon-lipin',
      title: '礼品',
      link: ''
    },
    {
      id: 5,
      icon: 'icon-jishiben',
      title: '记事本',
      link: ''
    },
    {
      id: 6,
      icon: 'icon-diqiuyi',
      title: '地球仪',
      link: ''
    },
    {
      id: 7,
      icon: 'icon-dianshiji',
      title: '电视机',
      link: ''
    },
    {
      id: 8,
      icon: 'icon-biaoqing',
      title: '表情',
      link: ''
    },
  ];
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
