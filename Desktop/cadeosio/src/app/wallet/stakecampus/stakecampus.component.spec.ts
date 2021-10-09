import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StakecampusComponent } from './stakecampus.component';

describe('StakecampusComponent', () => {
  let component: StakecampusComponent;
  let fixture: ComponentFixture<StakecampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StakecampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakecampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
