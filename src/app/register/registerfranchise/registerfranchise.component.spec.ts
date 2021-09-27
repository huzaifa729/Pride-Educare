import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfranchiseComponent } from './registerfranchise.component';

describe('RegisterfranchiseComponent', () => {
  let component: RegisterfranchiseComponent;
  let fixture: ComponentFixture<RegisterfranchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterfranchiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
