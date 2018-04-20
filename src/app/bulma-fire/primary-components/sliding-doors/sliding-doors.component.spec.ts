import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingDoorsComponent } from './sliding-doors.component';

describe('SlidingDoorsComponent', () => {
  let component: SlidingDoorsComponent;
  let fixture: ComponentFixture<SlidingDoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingDoorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
