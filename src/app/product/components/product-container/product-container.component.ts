import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services';
import { Observable } from 'rxjs';
import { ProductVariant } from '../../domain';
import { filter, map, switchMap } from 'rxjs/operators';
import { DialogService } from 'src/app/dialog';
import { ProductVariantDialogComponent } from '../product-variant-dialog';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  selectedIndex = 0;
  variants$: Observable<ProductVariant[]>;
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private orderService: OrderService,
      private dialogService: DialogService
    ) { }

  ngOnInit() {
    const produstId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    );

    this.variants$ = produstId$.pipe(
      switchMap(productId => this.orderService.getProductVariantsByProductId(productId))
    );
  }

  handleDirectBuy(variants: ProductVariant[]) {}

  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40;

    const formSubmitted = new EventEmitter();
    formSubmitted.subscribe(ev => {
      this.dialogService.saveData(ev);
      this.router.navigate(['/order/confirm']);
    });

    const selected = new EventEmitter();
    selected.subscribe(ev => {
      console.log(ev);
      this.selectedIndex = ev;
    });
    this.dialogService.open(ProductVariantDialogComponent, {
      inputs: {
        variants,
        selectedVariantIndex: this.selectedIndex
      },
      outputs: {
        formSubmitted,
        selected
      },
      position: {
        top: `${top}%`,
        left: '0',
        width: `100%`,
        height: `${100 - top}%`
      }
    });
  }

}
