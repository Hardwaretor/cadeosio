import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {Cadeosio3dComponent} from './cadeosio3d.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'cadeosio3d', component: Cadeosio3dComponent }
  ])],
  exports: [RouterModule]
})
export class Cadeosio3dRoutingModule {
}
