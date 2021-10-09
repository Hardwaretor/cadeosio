import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDirective } from '../wallet/sidebar.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PlmComponent } from './plm.component';



@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SidebarDirective

  ],
  bootstrap:    [ PlmComponent ]
})
export class PlmModule { }
