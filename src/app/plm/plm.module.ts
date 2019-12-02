import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlmRoutingModule } from './plm-routing.module';
import { PlmComponent } from './plm.component';


@NgModule({
  declarations: [PlmComponent],
  imports: [
    CommonModule,
    PlmRoutingModule
  ]
})
export class PlmModule { }
