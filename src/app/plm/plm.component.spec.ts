import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlmComponent } from './plm.component';

describe('PlmComponent', () => {
  let component: PlmComponent;
  let fixture: ComponentFixture<PlmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
