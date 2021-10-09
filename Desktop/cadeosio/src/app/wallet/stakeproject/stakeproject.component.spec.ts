import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeprojectComponent } from './stakeproject.component';

describe('StakeprojectComponent', () => {
  let component: StakeprojectComponent;
  let fixture: ComponentFixture<StakeprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
