import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, HomeThirdComponent } from './components';
import { HomeService } from './services';


@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, HomeThirdComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers:[HomeService]
})
export class HomeModule { }
