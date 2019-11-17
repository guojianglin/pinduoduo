import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import localZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParamInterceptor, NotificationInterceptor } from './home';
import { RecommendModule } from './recommend';
import { CategoryModule } from './category';
import { ChatModule } from './chat';
import { MyModule } from './my';
import { ProductModule } from './product';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RecommendModule,
    CategoryModule,
    ChatModule,
    MyModule,
    ProductModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh');
  }
}
