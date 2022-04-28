import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-crear-report',
  templateUrl: './crear-report.component.html',
  styleUrls: ['./crear-report.component.css']
})
export class CrearReportComponent implements OnInit {
  reportForm: FormGroup;
  title = "Crear Report";
  name: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _reportService: ReportService,
              private aRouter: ActivatedRoute) { 
    this.reportForm = this.fb.group({
      _id:['', Validators.required],
      user: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      typeReport: ['', Validators.required],
      creationDate: ['', Validators.required],
      solved: ['', Validators.required],
    });
    
    this.name = this.aRouter.snapshot.paramMap.get('_id');
    console.log(this.name);
  }

  ngOnInit(): void {
    this.updateReport();
  }

  addReport() {
    const report: Report = {
      _id: this.reportForm.get('_id')?.value,
      user: this.reportForm.get('user')?.value,
      title: this.reportForm.get('title')?.value,
      description: this.reportForm.get('description')?.value,
      typeReport: this.reportForm.get('typeReport')?.value,
      creationDate: this.reportForm.get('creationDate')?.value,
      solved: this.reportForm.get('solved')?.value,
    }

    if(this.name !== null){
      // Edit report
      this._reportService.updateReport(this.name, report).subscribe(data => {
        this.toastr.info('El report ha estat editat amb exit!', 'Report Editat');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.reportForm.reset();
      })
    }
    else {
      // Add report
      console.log(report);
      this._reportService.addReport(report).subscribe(data => {
        this.toastr.success('El report ha estat creat amb exit!', 'Report Creat');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.reportForm.reset();
      })
    }
  }

  updateReport() {
    if(this.name !== null) {
      this.title = 'Editar user';
      this._reportService.getReportById(this.name).subscribe(data => {
        this.reportForm.setValue({
          _id: data._id,
          user: data.user,
          title: data.title,
          description: data.description,
          typeReport: data.typeReport,
          creationDate: data.creationDate,
          solved: data.solved,
        })
      })
    }
  }

}
