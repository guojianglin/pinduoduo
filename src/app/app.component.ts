import { Component } from '@angular/core';
import { ImageSlider, TopMenu } from './shared/components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = 'zs';
  topMenus: TopMenu[] = [
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
  imageSlider: ImageSlider[] = [
    {
      imgUrl: '/assets/images/1.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: '/assets/images/2.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: '/assets/images/3.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: '/assets/images/4.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: '/assets/images/5.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: '/assets/images/6.png',
      link: '',
      caption: ''
    }
  ];
  handleTapSelected(menu: TopMenu) {
    console.log(menu);
  }
}
