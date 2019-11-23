import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExchangesComponent} from './exchanges.component';
import {ExchangesRoutingModule} from './exchanges-routing.module';
import {AppSharedModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    ExchangesRoutingModule,
    AppSharedModule
  ],
  declarations: [ExchangesComponent]
})
export class ExchangesModule {
}
