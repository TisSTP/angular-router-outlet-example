import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabMainComponent} from './tab-main/tab-main.component';
import {TabSub1Component} from './tab-sub1/tab-sub1.component';
import {TabSub2Component} from './tab-sub2/tab-sub2.component';
import {TabSub3Component} from './tab-sub3/tab-sub3.component';

const routes: Routes = [
  {
    path: '', component: TabMainComponent,
    children: [
      {path: '', redirectTo: 'tab1', pathMatch: 'full'},
      {path: 'tab1', component: TabSub1Component},
      {path: 'tab2', component: TabSub2Component},
      {path: 'tab3', component: TabSub3Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
