import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicadorComponent } from './publicador.component';

describe('PublicadorComponent', () => {
  let component: PublicadorComponent;
  let fixture: ComponentFixture<PublicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
