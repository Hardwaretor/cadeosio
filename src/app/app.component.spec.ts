import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs'

ScatterJS.plugins( new ScatterEOS() );

const network = ScatterJS.Network.fromJson({
  blockchain:'eos',
  chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  host:'nodes.get-scatter.com',
  port:443,
  protocol:'https'
});

ScatterJS.connect('cadeosio', {network}).then(connected => {
  if(!connected) return false;
  // ScatterJS.someMethod();
});

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cadeosio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cadeosio');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to cadeosio!');
  });
});
