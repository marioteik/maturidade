import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincomponentComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LogincomponentComponent;
  let fixture: ComponentFixture<LogincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
