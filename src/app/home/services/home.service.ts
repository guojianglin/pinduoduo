import { Injectable } from '@angular/core';
import { HomeModule } from '../home.module';
import { TopMenu, Channel, ImageSlider } from 'src/app/shared/components';
import { HttpClient } from '@angular/common/http';

interface TopMenusRes {
  data: TopMenu[];
}

interface ChannelRes {
  data: Channel[];
}

interface ImageSliderRes {
  data: ImageSlider[];
}

@Injectable()
export class HomeService {

  // topMenus: TopMenu[] = [
  //   {
  //     title: '热门',
  //     link: 'hot'
  //   },
  //   {
  //     title: '电脑',
  //     link: 'computer'
  //   },
  //   {
  //     title: '男装',
  //     link: 'men'
  //   },
  //   {
  //     title: '百货',
  //     link: 'prod'
  //   },
  //   {
  //     title: '运动',
  //     link: 'sport'
  //   },
  //   {
  //     title: '家纺',
  //     link: 'house'
  //   },
  //   {
  //     title: '内衣',
  //     link: 'shirt'
  //   },
  //   {
  //     title: '家装',
  //     link: 'decorate'
  //   },
  //   {
  //     title: '家具',
  //     link: 'tool'
  //   },
  //   {
  //     title: '水果',
  //     link: 'fruit'
  //   },
  //   {
  //     title: '汽车',
  //     link: 'car'
  //   },
  //   {
  //     title: '电器',
  //     link: 'frig'
  //   },
  //   {
  //     title: '鞋包',
  //     link: 'shoes'
  //   },
  //   {
  //     title: '食品',
  //     link: 'food'
  //   },
  //   {
  //     title: '手机',
  //     link: 'phone'
  //   },
  //   {
  //     title: '母婴',
  //     link: 'baby'
  //   },
  //   {
  //     title: '美妆',
  //     link: 'markup'
  //   },
  // ];

  // channels: Channel[] = [
  //   {
  //     id: 1,
  //     icon: 'icon-zhiwu',
  //     title: '植物',
  //     link: ''
  //   },
  //   {
  //     id: 2,
  //     icon: 'icon-naozhong',
  //     title: '闹钟',
  //     link: ''
  //   },
  //   {
  //     id: 3,
  //     icon: 'icon-qiche',
  //     title: '汽车',
  //     link: ''
  //   },
  //   {
  //     id: 4,
  //     icon: 'icon-lipin',
  //     title: '礼品',
  //     link: ''
  //   },
  //   {
  //     id: 5,
  //     icon: 'icon-jishiben',
  //     title: '记事本',
  //     link: ''
  //   },
  //   {
  //     id: 6,
  //     icon: 'icon-diqiuyi',
  //     title: '地球仪',
  //     link: ''
  //   },
  //   {
  //     id: 7,
  //     icon: 'icon-dianshiji',
  //     title: '电视机',
  //     link: ''
  //   },
  //   {
  //     id: 8,
  //     icon: 'icon-biaoqing',
  //     title: '表情',
  //     link: ''
  //   },
  //   {
  //     id: 1,
  //     icon: 'icon-zhiwu',
  //     title: '植物',
  //     link: ''
  //   },
  //   {
  //     id: 2,
  //     icon: 'icon-naozhong',
  //     title: '闹钟',
  //     link: ''
  //   },
  //   {
  //     id: 3,
  //     icon: 'icon-qiche',
  //     title: '汽车',
  //     link: ''
  //   },
  //   {
  //     id: 4,
  //     icon: 'icon-lipin',
  //     title: '礼品',
  //     link: ''
  //   },
  //   {
  //     id: 5,
  //     icon: 'icon-jishiben',
  //     title: '记事本',
  //     link: ''
  //   },
  //   {
  //     id: 6,
  //     icon: 'icon-diqiuyi',
  //     title: '地球仪',
  //     link: ''
  //   },
  //   {
  //     id: 7,
  //     icon: 'icon-dianshiji',
  //     title: '电视机',
  //     link: ''
  //   },
  //   {
  //     id: 8,
  //     icon: 'icon-biaoqing',
  //     title: '表情',
  //     link: ''
  //   },
  // ];

  // imageSlider: ImageSlider[] = [
  //   {
  //     imgUrl: '/assets/images/1.png',
  //     link: '',
  //     caption: ''
  //   },
  //   {
  //     imgUrl: '/assets/images/2.png',
  //     link: '',
  //     caption: ''
  //   },
  //   {
  //     imgUrl: '/assets/images/3.png',
  //     link: '',
  //     caption: ''
  //   },
  //   {
  //     imgUrl: '/assets/images/4.png',
  //     link: '',
  //     caption: ''
  //   },
  //   {
  //     imgUrl: '/assets/images/5.png',
  //     link: '',
  //     caption: ''
  //   },
  //   {
  //     imgUrl: '/assets/images/6.png',
  //     link: '',
  //     caption: ''
  //   }
  // ];

  constructor(private http: HttpClient) { }

  getTabs() {
    // return this.topMenus;
    return this.http.get<TopMenusRes>('assets/virtual-data/topMenus.json');
  }

  getChannels() {
    // return this.channels;
    return this.http.get<ChannelRes>('assets/virtual-data/channels.json');
  }

  getImages() {
    // return this.imageSlider;
    return this.http.get<ImageSliderRes>('assets/virtual-data/imageSlider.json');
  }

}
