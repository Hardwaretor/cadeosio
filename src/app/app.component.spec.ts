/* tslint:disable:no-unused-variable */
import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FooterComponent} from './shared/footer/footer.component';

import {RouterOutletStubComponent} from '../testing/router-stubs';
import 'rxjs/add/observable/of';
import {Observable, of} from 'rxjs';

import { ExchangesComponent } from './exchanges/exchanges.component';
import { Cadeosio3dComponent } from './cadeosio3d/cadeosio3d.component';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {
}

class RouterStub {
  events: Observable<Event> = of<Event>();
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderStubComponent,
        FooterComponent,
        RouterOutletStubComponent,
        ExchangesComponent,
        Cadeosio3dComponent
      ],
      providers: [
        {provide: Router, useClass: RouterStub}
      ]
    });
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
