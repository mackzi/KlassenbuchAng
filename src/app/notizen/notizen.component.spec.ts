import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotizenComponent } from './notizen.component';

describe('NotizenComponent', () => {
  let component: NotizenComponent;
  let fixture: ComponentFixture<NotizenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotizenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
