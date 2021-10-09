import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { P3dComponent } from './p3d/p3d.component';
import { PlmComponent } from './plm/plm.component';
import { JobsComponent } from './jobs/jobs.component';
import { ToolsComponent } from './tools/tools.component';
import { WalletComponent } from './wallet/wallet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampusComponent } from './campus/campus.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { ListComponent } from './users/list.component';
import { AddEditComponent } from './users/add-edit.component';



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
    { path : 'list', component: ListComponent },
    { path : 'edit', component: AddEditComponent },
    { path : 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }