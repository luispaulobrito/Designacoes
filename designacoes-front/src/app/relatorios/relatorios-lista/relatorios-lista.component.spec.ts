import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosListaComponent } from './relatorios-lista.component';

describe('RelatoriosListaComponent', () => {
  let component: RelatoriosListaComponent;
  let fixture: ComponentFixture<RelatoriosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosListaComponent]
    });
    fixture = TestBed.createComponent(RelatoriosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
