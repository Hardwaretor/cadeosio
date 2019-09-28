import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeosioComponent } from './cadeosio.component';

describe('CadeosioComponent', () => {
  let component: CadeosioComponent;
  let fixture: ComponentFixture<CadeosioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadeosioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeosioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
