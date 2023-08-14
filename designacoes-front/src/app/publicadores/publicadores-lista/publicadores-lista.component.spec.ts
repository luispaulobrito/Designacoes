import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicadoresListaComponent } from './publicadores-lista.component';

describe('PublicadoresListaComponent', () => {
  let component: PublicadoresListaComponent;
  let fixture: ComponentFixture<PublicadoresListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicadoresListaComponent]
    });
    fixture = TestBed.createComponent(PublicadoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
