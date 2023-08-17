import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaErroComponent } from './alerta-erro.component';

describe('AlertaErroComponent', () => {
  let component: AlertaErroComponent;
  let fixture: ComponentFixture<AlertaErroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertaErroComponent]
    });
    fixture = TestBed.createComponent(AlertaErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
