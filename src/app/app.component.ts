import { Component } from '@angular/core';
import { ImageSlider, TopMenu, Channel } from './shared/components';


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
