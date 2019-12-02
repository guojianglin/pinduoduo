import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from 'src/app/dialog';
import { Observable, Subject, merge, combineLatest } from 'rxjs';
import { ProductVariant } from '../../domain';
import { map, share, tap } from 'rxjs/operators';
import { Payment } from '../payment';

@Component({
  selector: 'app-comfirm-order',
  templateUrl: './comfirm-order.component.html',
  styleUrls: ['./comfirm-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComfirmOrderComponent implements OnInit {

  item$: Observable<object | null>;
  count$ = new Subject<number>();
  totalPrice$: Observable<number>;
  payments: Payment[];

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.payments = this.payments = [
      {
        id: 1,
        name: '微信支付',
        icon: 'assets/icons/wechat_pay.png',
        desc: '50元以内可免密支付'
      },
      {
        id: 2,
        name: '支付宝',
        icon: 'assets/icons/alipay.png'
      },
      {
        id: 3,
        name: '找微信好友支付',
        icon: 'assets/icons/friends.png'
      }
    ];
    this.item$ = this.dialogService.getData().pipe(
      tap(item => console.log('data====', item)),
      // share(); //====> not working????
    );
    const unitPrice$ = this.item$.pipe(
      // tap(item => console.log('item1', item)),
      map((item: {variant: ProductVariant; count: number}) => item.variant.price)
    );
    const amount$ = this.item$.pipe(
      // tap(item => console.log('item2', item)),
      map((item: {variant: ProductVariant; count: number}) => item.count)
    );
    const mergeCount$ = merge(amount$, this.count$);

    this.totalPrice$ = combineLatest([unitPrice$, mergeCount$]).pipe(
      map(([price, amount]) => price * amount)
    );
  }

  handleAmountChange(count: number) {
    this.count$.next(count);
  }

  handlePay() {}
}
