import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyramComponent } from './buyram.component';

describe('BuyramComponent', () => {
  let component: BuyramComponent;
  let fixture: ComponentFixture<BuyramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
