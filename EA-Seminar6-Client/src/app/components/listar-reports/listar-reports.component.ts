import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-listar-reports',
  templateUrl: './listar-reports.component.html',
  styleUrls: ['./listar-reports.component.css']
})
export class ListarReportsComponent implements OnInit {
  listReports: Report[] = [];

  constructor(private _reportService: ReportService,
        private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getReports();
  }

  getReports() {
    this._reportService.getReports().subscribe(data => {
      console.log(data);
      this.listReports = data;
    }, error => {
      console.log(error);
    })
  }

  deleteReport(id: string) {
    this._reportService.deleteReport(id).subscribe(data => {
      this.toastr.error('El report ha estat eliminat amb exit', 'Report eliminat');
      this.getReports();
    }, error => {
      console.log(error);
    })
  }
}
