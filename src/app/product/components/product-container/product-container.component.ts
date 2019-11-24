import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services';
import { Observable } from 'rxjs';
import { ProductVariant } from '../../domain';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  selectedIndex = 0;
  variants$: Observable<ProductVariant[]>;
  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    const produstId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    );

    this.variants$ = produstId$.pipe(
      switchMap(productId => this.orderService.getProductVariantsByProductId(productId))
    );
  }

}
