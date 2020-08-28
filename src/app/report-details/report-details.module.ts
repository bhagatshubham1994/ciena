import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportDetailsRoutingModule } from './report-details-routing.module';

import { DropdownModule } from 'primeng/dropdown';
import { ConfirmationService} from 'primeng/api';  
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [ReportDetailsComponent],
  imports: [
    CommonModule,
    ReportDetailsRoutingModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    TableModule,
    TabViewModule
  ],
  providers: [DialogService, ConfirmationService, ConfirmDialogModule, DropdownModule]
})

export class ReportDetailsModule { }
