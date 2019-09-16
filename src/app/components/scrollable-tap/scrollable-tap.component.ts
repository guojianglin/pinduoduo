import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

export interface TopMenu {
  title: string;
  readonly link: string;
}

@Component({
  selector: 'app-scrollable-tap',
  templateUrl: './scrollable-tap.component.html',
  styleUrls: ['./scrollable-tap.component.scss']
})
export class ScrollableTapComponent implements OnInit, OnChanges {
  /**
   * 构造函数总是第一个被调用
   */
  constructor() { }
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = 'red';
  @Input() titleColor = '#000';
  @Input() titleActiveColor = '#000';
  @Input() indicatorColor = 'brown';
  @Output() tapSelected = new EventEmitter();

  /**
   * 组件输入型属性改变时调用，第一个调用且以后只要有输入性属性改变就会调用
   * @param changes 索引对象 key是属性名，value是SimpleChanges
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  /**
   * 组件初始化完成，可以安全地使用方法和属性
   */
  ngOnInit() {
  }

  handleSelected(index: number) {
    this.selectedIndex = index;
    this.tapSelected.emit(this.menus[this.selectedIndex]);
  }

}
