import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosResumoComponent } from './relatorios-resumo.component';

describe('RelatoriosResumoComponent', () => {
  let component: RelatoriosResumoComponent;
  let fixture: ComponentFixture<RelatoriosResumoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosResumoComponent]
    });
    fixture = TestBed.createComponent(RelatoriosResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
