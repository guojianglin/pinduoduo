import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductContainerComponent, GroupItemComponent, ProductAmountComponent,
  GroupShortListComponent, ProductVariantDialogComponent } from './components';



@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule { }
