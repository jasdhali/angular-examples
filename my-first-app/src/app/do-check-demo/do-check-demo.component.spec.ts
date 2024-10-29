import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckDemoComponent } from './do-check-demo.component';

describe('DoCheckDemoComponent', () => {
  let component: DoCheckDemoComponent;
  let fixture: ComponentFixture<DoCheckDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoCheckDemoComponent]
    });
    fixture = TestBed.createComponent(DoCheckDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
