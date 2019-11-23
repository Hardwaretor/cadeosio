import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cadeosio3dComponent } from './cadeosio3d.component';
import {Cadeosio3dRoutingModule} from './cadeosio3d-routing.module';
import {AppSharedModule} from '../shared';
import {AngularFireAuthModule} from '@angular/fire/auth';



@NgModule({
  imports: [
    CommonModule,
    Cadeosio3dRoutingModule,
    AppSharedModule,
    AngularFireAuthModule,
  ],
  declarations: [Cadeosio3dComponent]
})
export class Cadeosio3dModule { }
