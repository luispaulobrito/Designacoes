import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosFormComponent } from './relatorios-form.component';

describe('RelatoriosFormComponent', () => {
  let component: RelatoriosFormComponent;
  let fixture: ComponentFixture<RelatoriosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosFormComponent]
    });
    fixture = TestBed.createComponent(RelatoriosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
