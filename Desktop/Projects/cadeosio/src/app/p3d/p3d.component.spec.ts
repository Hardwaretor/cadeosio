import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P3dComponent } from './p3d.component';

describe('P3dComponent', () => {
  let component: P3dComponent;
  let fixture: ComponentFixture<P3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
