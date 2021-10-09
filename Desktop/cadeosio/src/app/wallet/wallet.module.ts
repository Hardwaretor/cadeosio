import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { SidebarDirective } from './sidebar.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WalletComponent } from './wallet.component';
import { StakeprojectComponent } from './stakeproject/stakeproject.component';
import { StakecampusComponent } from './stakecampus/stakecampus.component';
import { StakeeosComponent } from './stakeeos/stakeeos.component';
import { SuplierpayComponent } from './suplierpay/suplierpay.component';
import { TransferComponent } from './transfer/transfer.component';
import { BuyramComponent } from './buyram/buyram.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { KeysComponent } from './keys/keys.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HistoryComponent } from './history/history.component';
import { VoteComponent } from './vote/vote.component';



@NgModule({
  declarations: [

    HelloComponent, 
    SidebarDirective,
    WalletComponent,
    StakeprojectComponent,
    StakecampusComponent,
    StakeeosComponent,
    SuplierpayComponent,
    TransferComponent,
    BuyramComponent,
    CreateaccountComponent,
    KeysComponent,
    AuthenticationComponent,
    HistoryComponent,
    VoteComponent,

  ],
  
  imports: [

    CommonModule,
    BrowserModule,
    FormsModule

  ],
  bootstrap:    [ WalletComponent ]
})
export class WalletModule { }
