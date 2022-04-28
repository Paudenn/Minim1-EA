import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReportComponent } from './crear-report.component';

describe('CrearUserComponent', () => {
  let component: CrearReportComponent;
  let fixture: ComponentFixture<CrearReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
