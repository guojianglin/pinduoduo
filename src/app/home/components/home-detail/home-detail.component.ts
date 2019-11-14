import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  startTime = new Date(2019, 11, 11);
  futureTime = new Date(2019, 11, 12);

  // selecedTab: string;
  selecedTab$: Observable<string>;

  // imageSlider;
  imageSlider$: Observable<any>;
  // channels;
  channels$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private ref: ChangeDetectorRef
  ) {
    // this.homeService.getImages().subscribe((res: any) => {
    //   this.imageSlider = res.data;
    //   this.ref.markForCheck();
    //   console.log('this.imageSlider', this.imageSlider);
    // });
    this.imageSlider$ = this.homeService.getImages().pipe(
      map((param) => param.data)
    );
    // this.homeService.getChannels().subscribe((res: any) => {
    //   this.channels = res.data;
    //   console.log('this.channels', this.channels);
    //   this.ref.markForCheck();
    // });
    this.channels$ = this.homeService.getChannels().pipe(
      map((param) => param.data)
    );
    // this.imageSlider = this.homeService.imageSlider;
    // this.channels = this.homeService.channels;
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.selecedTab = params.get('variable');
    //   console.log('路径参数', params);
    //   this.ref.markForCheck();
    //   // this.ref.markForCheck();
    // });
    this.selecedTab$ = this.route.paramMap.pipe(
      filter(param => param.has('variable')),
      map(param => param.get('variable')),
    );
    // this.route.queryParamMap.subscribe(params => {
    //   console.log('查询参数', params);
    // });
  }

}
