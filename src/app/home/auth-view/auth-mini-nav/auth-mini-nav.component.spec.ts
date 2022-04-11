import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMiniNavComponent } from './auth-mini-nav.component';

describe('AuthMiniNavComponent', () => {
  let component: AuthMiniNavComponent;
  let fixture: ComponentFixture<AuthMiniNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthMiniNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMiniNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
