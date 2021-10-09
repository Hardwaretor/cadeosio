import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierpayComponent } from './suplierpay.component';

describe('SuplierpayComponent', () => {
  let component: SuplierpayComponent;
  let fixture: ComponentFixture<SuplierpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuplierpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplierpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
