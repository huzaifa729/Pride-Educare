import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfranchisesComponent } from './registerfranchises.component';

describe('RegisterfranchisesComponent', () => {
  let component: RegisterfranchisesComponent;
  let fixture: ComponentFixture<RegisterfranchisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterfranchisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfranchisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
