import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomepageComponent } from './mobile-homepage.component';

describe('MobileHomepageComponent', () => {
  let component: MobileHomepageComponent;
  let fixture: ComponentFixture<MobileHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
