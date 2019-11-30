import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import {WalletRoutingModule} from './wallet-routing.module';
import {AppSharedModule} from '../shared';
import {AngularFireAuthModule} from '@angular/fire/auth';



@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule,
    AppSharedModule,
    AngularFireAuthModule
  ],
  declarations: [WalletComponent]
})
export class WalletModule { }
