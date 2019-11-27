import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { ScrollableTapComponent, ImageSliderComponent, HorizontalGridComponent,
  CountDownComponent, FooterComponent, ProductCardComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective, TagDirective, AvatarDirective } from './directives';
import { AgoPipePipe } from './pipes';
import { VerticalGridComponent } from './components/vertical-grid/vertical-grid.component';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { DialogModule } from '../dialog';


@NgModule({
  declarations: [
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipePipe,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
  ],
  exports: [
    CommonModule,
    SharedRoutingModule,
    DialogModule,
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipePipe,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent
  ]
})
export class SharedModule { }
