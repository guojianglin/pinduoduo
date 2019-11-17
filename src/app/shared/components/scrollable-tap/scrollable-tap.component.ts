import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';

export interface TopMenu {
  title: string;
  readonly link: string;
}

@Component({
  selector: 'app-scrollable-tap',
  templateUrl: './scrollable-tap.component.html',
  styleUrls: ['./scrollable-tap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollableTapComponent implements OnInit {
  /**
   * 构造函数总是第一个被调用
   */
  constructor() { }
  selectedIndex = -1;
  @Input() selectedTabLink;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = 'red';
  @Input() titleColor = '#000';
  @Input() titleActiveColor = '#000';
  @Input() indicatorColor = 'brown';
  @Output() tapSelected = new EventEmitter();

  /**
   * 组件初始化完成，可以安全地使用方法和属性
   */
  ngOnInit() {
  }

  handleSelected(index: number) {
    this.selectedTabLink = this.menus[index].link;
    this.tapSelected.emit(this.menus[index]);
  }

}
