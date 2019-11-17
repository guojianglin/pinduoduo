import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendRoutingModule } from './recommend-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecommentContainerComponent } from './components';


@NgModule({
  declarations: [
    RecommentContainerComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RecommendRoutingModule,
  ]
})
export class RecommendModule { }
