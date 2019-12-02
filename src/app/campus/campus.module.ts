import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampusRoutingModule } from './campus-routing.module';
import { CampusComponent } from './campus.component';


@NgModule({
  declarations: [CampusComponent],
  imports: [
    CommonModule,
    CampusRoutingModule
  ]
})
export class CampusModule { }
