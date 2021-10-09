import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpJsonComponent } from './bp.json.component';

describe('Bp.JsonComponent', () => {
  let component: BpJsonComponent;
  let fixture: ComponentFixture<BpJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
