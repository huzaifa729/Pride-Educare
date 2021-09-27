import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininsideComponent } from './logininside.component';

describe('LogininsideComponent', () => {
  let component: LogininsideComponent;
  let fixture: ComponentFixture<LogininsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogininsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogininsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
