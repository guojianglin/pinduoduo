import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductContainerComponent, GroupItemComponent, ProductAmountComponent,
  GroupShortListComponent, ProductVariantDialogComponent } from './components';
import { ComfirmOrderComponent } from './components/comfirm-order/comfirm-order.component';
import { PaymentComponent } from './components/payment/payment.component';



@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    ComfirmOrderComponent,
    PaymentComponent],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule { }
