import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { P3dComponent } from './p3d/p3d.component';
import { PlmComponent } from './plm/plm.component';
import { JobsComponent } from './jobs/jobs.component';
import { ToolsComponent } from './tools/tools.component';
import { WalletComponent } from './wallet/wallet.component';
import { AuthenticationComponent} from './wallet/authentication/authentication.component';
import { BuyramComponent} from './wallet/buyram/buyram.component';
import { CreateaccountComponent} from './wallet/createaccount/createaccount.component';
import { KeysComponent} from './wallet/keys/keys.component';
import { StakecampusComponent} from './wallet/stakecampus/stakecampus.component';
import { StakeeosComponent} from './wallet/stakeeos/stakeeos.component';
import { StakeprojectComponent} from './wallet/stakeproject/stakeproject.component';
import { SuplierpayComponent} from './wallet/suplierpay/suplierpay.component';
import { TransferComponent} from './wallet/transfer/transfer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampusComponent } from './campus/campus.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { UploadComponent } from './upload/upload.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './wallet/history/history.component';
import { VoteComponent } from './wallet/vote/vote.component';



const routes: Routes = [
    { path : 'home', component: HomeComponent },
    { path : 'p3d' , component : P3dComponent},
    { path : 'plm' , component : PlmComponent},
    { path : 'jobs' , component : JobsComponent},
    { path : 'tools' , component : ToolsComponent},
    { path : 'wallet' , component : WalletComponent},
    { path : 'dashboard' , component : DashboardComponent},
    { path : 'footer' , component : FooterComponent},
    { path : 'campus' , component : CampusComponent},
    { path : 'login', component: LoginComponent },
    { path : 'register', component: RegisterComponent },
    { path : 'upload', component: UploadComponent },
    { path : 'profile', component: ProfileComponent },
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'buy/sell-ram', component: BuyramComponent },
    { path: 'create-account', component: CreateaccountComponent },
    { path: 'keys-manager', component: KeysComponent },
    { path: 'stake-campus', component: StakecampusComponent},
    { path: 'stake-eos', component: StakeeosComponent },
    { path: 'stake-project', component: StakeprojectComponent },
    { path: 'supplier-payment', component: SuplierpayComponent },
    { path: 'transfer-tokens', component: TransferComponent},
    { path: 'history-account', component: HistoryComponent},
    { path: 'vote', component: VoteComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})
export class AppRoutingModule { }