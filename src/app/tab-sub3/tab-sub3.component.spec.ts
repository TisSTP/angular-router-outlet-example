import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TabSub3Component} from './tab-sub3.component';

describe('TabSub3Component', () => {
  let component: TabSub3Component;
  let fixture: ComponentFixture<TabSub3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [TabSub3Component]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
