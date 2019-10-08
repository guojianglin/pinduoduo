import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { ScrollableTapComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';


@NgModule({
  declarations: [
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    CommonModule,
    SharedRoutingModule,
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ]
})
export class SharedModule { }
