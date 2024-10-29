import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrefListComponent } from './user-pref-list.component';

describe('UserPrefListComponent', () => {
  let component: UserPrefListComponent;
  let fixture: ComponentFixture<UserPrefListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPrefListComponent]
    });
    fixture = TestBed.createComponent(UserPrefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
