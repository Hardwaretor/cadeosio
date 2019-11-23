import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadeosio3dComponent } from './cadeosio3d.component';

describe('Cadeosio3dComponent', () => {
  let component: Cadeosio3dComponent;
  let fixture: ComponentFixture<Cadeosio3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadeosio3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadeosio3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
