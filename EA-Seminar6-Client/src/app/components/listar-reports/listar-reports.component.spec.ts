import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReportsComponent } from './listar-reports.component';

describe('ListarReportsComponent', () => {
  let component: ListarReportsComponent;
  let fixture: ComponentFixture<ListarReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
