import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductContainerComponent, ComfirmOrderComponent } from './components';


const routes: Routes = [
  { path: 'products',
    children: [
      {
        path: ':productId', component: ProductContainerComponent
      }
    ]
  },
  {
    path: 'orders/confirm',
    component: ComfirmOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
