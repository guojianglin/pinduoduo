import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import { HomeService } from './services';


@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  // providers: [HomeService]
})
export class HomeModule { }
