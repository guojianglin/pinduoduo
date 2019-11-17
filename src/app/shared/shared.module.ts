import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { ScrollableTapComponent, ImageSliderComponent, HorizontalGridComponent, CountDownComponent, FooterComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';
import { AgoPipePipe } from './pipes';
import { VerticalGridComponent } from './components/vertical-grid/vertical-grid.component';


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
    FooterComponent,
    VerticalGridComponent
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
    FooterComponent,
    VerticalGridComponent
  ]
})
export class SharedModule { }
