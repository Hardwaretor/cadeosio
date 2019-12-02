import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlmComponent } from './plm.component';

const routes: Routes = [{ path: '', component: PlmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlmRoutingModule { }
