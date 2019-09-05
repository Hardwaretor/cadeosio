import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
=======
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        ClarityModule,
     ],

     declarations: [ AppComponent ],
     bootstrap: [ AppComponent ]
})
export class AppModule {    }
>>>>>>> a7b31aceb4ddc307e3f34add65827144958bf111
