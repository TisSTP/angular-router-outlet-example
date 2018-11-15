import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TabMainComponent} from './tab-main/tab-main.component';
import {TabSub1Component} from './tab-sub1/tab-sub1.component';
import {TabSub2Component} from './tab-sub2/tab-sub2.component';
import {TabSub3Component} from './tab-sub3/tab-sub3.component';

@NgModule({
  declarations: [
    AppComponent,
    TabMainComponent,
    TabSub1Component,
    TabSub2Component,
    TabSub3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
