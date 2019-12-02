import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampusComponent } from './campus.component';

const routes: Routes = [{ path: '', component: CampusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampusRoutingModule { }
