import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportDetailsComponent } from './report-details/report-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ReportDetailsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReportDetailsRoutingModule { }
