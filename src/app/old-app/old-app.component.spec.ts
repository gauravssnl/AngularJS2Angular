import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldAppComponent } from './old-app.component';

describe('OldAppComponent', () => {
  let component: OldAppComponent;
  let fixture: ComponentFixture<OldAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
