import { Component, OnInit } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  selecedTab: string;

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
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selecedTab = params.get('variable');
      console.log('路径参数', params);
    });
    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
  }

}
