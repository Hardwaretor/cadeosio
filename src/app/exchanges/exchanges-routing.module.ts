import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ExchangesComponent} from './exchanges.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'exchanges', component: ExchangesComponent }
  ])],
  exports: [RouterModule]
})
export class ExchangesRoutingModule {
}
