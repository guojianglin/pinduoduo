import { Component, OnInit } from '@angular/core';

interface TopMenu {
  title: string;
  readonly link: string;
}

@Component({
  selector: 'app-scrollable-tap',
  templateUrl: './scrollable-tap.component.html',
  styleUrls: ['./scrollable-tap.component.scss']
})
export class ScrollableTapComponent implements OnInit {

  constructor() { }
  selectIndex = -1;
  menus: TopMenu[] = [
    {
      title: '热门',
      link: '1'
    },
    {
      title: '电脑',
      link: '1'
    },
    {
      title: '男装',
      link: '2'
    },
    {
      title: '百货',
      link: '3'
    },
    {
      title: '运动',
      link: '4'
    },
    {
      title: '家纺',
      link: '5'
    },
    {
      title: '内衣',
      link: '6'
    },
    {
      title: '家装',
      link: '7'
    },
    {
      title: '家具',
      link: '7'
    },
    {
      title: '水果',
      link: '8'
    },
    {
      title: '汽车',
      link: '9'
    },
    {
      title: '电器',
      link: '10'
    },
    {
      title: '鞋包',
      link: '11'
    },
    {
      title: '食品',
      link: '12'
    },
    {
      title: '手机',
      link: '1'
    },
    {
      title: '母婴',
      link: '12'
    },
    {
      title: '美妆',
      link: '1'
    },
  ];

  ngOnInit() {
  }

}
