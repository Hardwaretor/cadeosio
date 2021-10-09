import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeeosComponent } from './stakeeos.component';

describe('StakeeosComponent', () => {
  let component: StakeeosComponent;
  let fixture: ComponentFixture<StakeeosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeeosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
