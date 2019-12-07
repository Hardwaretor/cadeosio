import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import {WalletRoutingModule} from './wallet-routing.module';
import {AppSharedModule} from '../shared';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { ScatterService, } from '../services/scatter.service';

export function transfer(to: string, amount: number, memo: string = '', successCallback, errorCallback) {
  const that = this;
  this.login(function () {
      that.eos.transfer(that.identity.accounts[0].name, to, (amount).toString() + ' EOS', memo, []).then(transaction => {
        successCallback(transaction);
      }).catch(error => {
        errorCallback(error);
      });
    }, function (error) {
      errorCallback(error);
    }
  );
}


@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule,
    AppSharedModule,
    AngularFireAuthModule,

  ],
  declarations: [WalletComponent],
  providers: [ScatterService],
  bootstrap: [WalletComponent]
})
export class WalletModule { }

