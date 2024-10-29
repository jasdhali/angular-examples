import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesDemoComponent } from './on-changes-demo.component';

describe('OnChangesDemoComponent', () => {
  let component: OnChangesDemoComponent;
  let fixture: ComponentFixture<OnChangesDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnChangesDemoComponent]
    });
    fixture = TestBed.createComponent(OnChangesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
