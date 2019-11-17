import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { ScrollableTapComponent, ImageSliderComponent, HorizontalGridComponent, CountDownComponent, FooterComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';
import { AgoPipePipe } from './pipes';


@NgModule({
  declarations: [
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipePipe,
    CountDownComponent,
    FooterComponent
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
    GridItemTitleDirective,
    AgoPipePipe,
    CountDownComponent,
    FooterComponent
  ]
})
export class SharedModule { }
