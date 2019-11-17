import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommentContainerComponent } from './components';


const routes: Routes = [
  {path: 'recommend', component: RecommentContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendRoutingModule { }
