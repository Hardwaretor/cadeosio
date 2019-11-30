import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'wallet', component: WalletComponent }
  ])],
  exports: [RouterModule]
})
export class WalletRoutingModule {
}