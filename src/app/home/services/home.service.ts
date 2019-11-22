import { Injectable } from '@angular/core';
import { HomeModule } from '../home.module';
import { TopMenu, Channel, ImageSlider } from 'src/app/shared/components';
import { HttpClient } from '@angular/common/http';
import { Ad, Product } from 'src/app/shared';
import { Observable } from 'rxjs';

interface TopMenusRes {
  data: TopMenu[];
}

interface ChannelRes {
  data: Channel[];
}

interface ImageSliderRes {
  data: ImageSlider[];
}

interface AdsRes {
  data: Ad[];
}

interface ProductRes {
  data: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {


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

  getAdsByTab(tab: string): Observable<AdsRes> {
    return this.http.get<AdsRes>('assets/virtual-data/ads.json', {params: {category_like: tab}});
  }

  getProductsByTab(): Observable<ProductRes> {
    return this.http.get<ProductRes>('assets/virtual-data/products.json');
  }

}
