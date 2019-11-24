import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Renderer2, OnDestroy,
  ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input() imageSlider: ImageSlider[];
  @Input() sliderHeight = '160px';
  @Input() timeoutBySeconds = 2;
  /**
   * 当前索引
   */
  selectIndex = 0;
  timeoutId;
  @ViewChild('imgSlider', {static: true}) imgSlider: ElementRef;
  constructor(private rd2: Renderer2, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('ngOnInit', this.imgSlider);
    if (this.timeoutBySeconds <= 0) {
      return;
    }
    this.autoSlide();
  }

  ngOnChanges(): void {
    console.log('this.imageSlider', this.imageSlider);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  /**
   * 轮播图自动播放
   */
  autoSlide() {
    this.timeoutId = setTimeout(() => {
      const scrollLeft = this.getIndex(++this.selectIndex) * this.imgSlider.nativeElement.scrollWidth / this.imageSlider.length;
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft', scrollLeft);
      this.autoSlide();
    }, this.timeoutBySeconds * 1000);
  }

  /**
   * 对索引的范围进行限制转化
   * @param index 当前索引
   */
  getIndex(index) {
    return index >= 0 ? index % this.imageSlider.length : this.imageSlider.length - (Math.abs(index) % this.imageSlider.length);
  }

  /**
   * 滚动处理函数
   * @param ev 事件对象
   */
  handleScroll(ev) {
    const radio = ev.target.scrollLeft / ev.target.scrollWidth;
    this.selectIndex = Math.round(radio * this.imageSlider.length);
    // this.ref.markForCheck();
  }


}
