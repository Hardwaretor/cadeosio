import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';


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
  imports: [RouterModule.forChild([
    {path: '', component: WalletComponent }
  ])],
  exports: [RouterModule, ]
})
export class WalletRoutingModule {
}
