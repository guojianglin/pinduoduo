import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductContainerComponent } from './components';


const routes: Routes = [
  { path: 'product', component: ProductContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
