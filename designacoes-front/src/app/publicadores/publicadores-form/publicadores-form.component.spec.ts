import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicadoresFormComponent } from './publicadores-form.component';

describe('PublicadoresFormComponent', () => {
  let component: PublicadoresFormComponent;
  let fixture: ComponentFixture<PublicadoresFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicadoresFormComponent]
    });
    fixture = TestBed.createComponent(PublicadoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
