import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, HomeThirdComponent } from './components';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeContainerComponent,
    children: [
      { path: '', redirectTo: 'hot', pathMatch: 'full'},
      { path: ':variable', component: HomeDetailComponent,
        children: [
          {path: 'grand', component: HomeGrandComponent},
          {path: 'aux', component: HomeAuxComponent, outlet: 'second'},
          {path: 'third', component: HomeThirdComponent, outlet: 'second'},
          {path: 'aux', component: HomeAuxComponent, outlet: 'third'},
          {path: 'third', component: HomeThirdComponent, outlet: 'third'},
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
