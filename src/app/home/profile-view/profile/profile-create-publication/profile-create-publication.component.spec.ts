import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCreatePublicationComponent } from './profile-create-publication.component';

describe('ProfileCreatePublicationComponent', () => {
  let component: ProfileCreatePublicationComponent;
  let fixture: ComponentFixture<ProfileCreatePublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCreatePublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCreatePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
