import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url = 'http://localhost:3000/minim1';

  constructor(private http: HttpClient) { }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.url + '/reports');
  }

  deleteReport(id: string): Observable<string> {
    return this.http.delete(this.url + '/reports/' + id, {responseType: 'text'})
  }

  addReport(report: Report): Observable<string> {
    return this.http.post(this.url + '/reports', report, {responseType: 'text'}) ;
  }

  getReportById(id: string): Observable<Report> {
    return this.http.get<Report>(this.url + '/reports/' + id);
  }

  updateReport(id: string, report: Report): Observable<string> {
    return this.http.put(this.url + '/reports/' + id, report, {responseType: 'text'});
  }
}
