import { Component, OnInit } from '@angular/core';
import { TopMenu } from '../../../shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  username = 'zs';
  topMenus: TopMenu[] = [
    {
      title: '热门',
      link: 'hot'
    },
    {
      title: '电脑',
      link: 'computer'
    },
    {
      title: '男装',
      link: 'men'
    },
    {
      title: '百货',
      link: 'prod'
    },
    {
      title: '运动',
      link: 'sport'
    },
    {
      title: '家纺',
      link: 'house'
    },
    {
      title: '内衣',
      link: 'shirt'
    },
    {
      title: '家装',
      link: 'decorate'
    },
    {
      title: '家具',
      link: 'tool'
    },
    {
      title: '水果',
      link: 'fruit'
    },
    {
      title: '汽车',
      link: 'car'
    },
    {
      title: '电器',
      link: 'frig'
    },
    {
      title: '鞋包',
      link: 'shoes'
    },
    {
      title: '食品',
      link: 'food'
    },
    {
      title: '手机',
      link: 'phone'
    },
    {
      title: '母婴',
      link: 'baby'
    },
    {
      title: '美妆',
      link: 'markup'
    },
  ];

  constructor(
    private router: Router
  ) {}
  ngOnInit() {}
  handleTapSelected(menu: TopMenu) {
    this.router.navigate(['/home', menu.link]);
  }

}
