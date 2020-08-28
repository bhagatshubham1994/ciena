import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { KeyValue } from '@angular/common';
import {SelectItem, ConfirmationService} from 'primeng/api';
import {DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  reportList: any[];
  originalReports: any[];
  menuItems: SelectItem[];
  selectedItem: KeyValue<string, string>
  ref: DynamicDialogRef;
  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService
  ) { 
    this.menuItems = [
      {label:'Menu', value:null},
      {label:'Item 1', value:'Item 1'},
      {label:'Item 2', value:'Item 2'},
      {label:'Item 3', value:'Item 3'}
    ];
  }

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.apiService.getTestData().subscribe(
      data => {
        this.reportList = data['items'];
        this.originalReports = [...this.reportList];
        console.log('reportList:', this.reportList);
      },
      err => {
        console.log(err);
      }
    )
  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        this.reportList = this.originalReports;
        console.log(event.index)
        break;
      case 1:
        this.reportList = this.originalReports.slice().sort((a, b) => a.nodeType > b.nodeType ? -1 : b.nodeType > a.nodeType ? 1 : 0);
          
        console.log(event.index)
        break;
      case 2:
        this.reportList = this.originalReports.filter(report => report['conditionSeverity'] === 'CRITICAL');
        console.log(event.index, this.reportList)
        break;
      case 3:
        this.reportList = this.originalReports.filter(report => report['conditionSeverity'] === 'MAJOR');
        console.log(event.index, this.reportList)
        break;
    
      default:
        break;
    }
  }

  logout() {
    if (confirm('Do You want to Logout?')) {
      close();
    }

    // this.confirmationService.confirm({
    //     message: 'Are you sure that you want to perform this action?',
    //     accept: () => {
    //     }
    // });

  }
}
