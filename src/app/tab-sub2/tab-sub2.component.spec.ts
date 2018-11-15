import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TabSub2Component} from './tab-sub2.component';

describe('TabSub2Component', () => {
  let component: TabSub2Component;
  let fixture: ComponentFixture<TabSub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [TabSub2Component]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
