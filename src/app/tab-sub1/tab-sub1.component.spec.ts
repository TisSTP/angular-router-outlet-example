import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TabSub1Component} from './tab-sub1.component';

describe('TabSub1Component', () => {
  let component: TabSub1Component;
  let fixture: ComponentFixture<TabSub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [TabSub1Component]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
