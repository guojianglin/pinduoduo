import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad, Product } from 'src/app/shared';
import { switchMap, map } from 'rxjs/operators';
import { HomeService } from 'src/app/home';

@Component({
  selector: 'app-recomment-container',
  templateUrl: './recomment-container.component.html',
  styleUrls: ['./recomment-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommentContainerComponent implements OnInit {

  ad$: Observable<Ad>;

  products$: Observable<Product[]>;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.ad$ = this.homeService.getAdsByTab('hot').pipe(
      map(res => res.data[0])
    );

    this.products$ = this.homeService.getProductsByTab().pipe(
      map(products => products.data)
    );
  }

}
