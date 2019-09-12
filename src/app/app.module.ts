import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

<<<<<<< HEAD
=======
import { AppComponent } from './app.component';
>>>>>>> 167d54065cc019452d2090f7d0fa228cd8c1291f
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
<<<<<<< HEAD
    TopBarComponent,
    ProductListComponent
  ],
  bootstrap: [ TopBarComponent ]
})
export class AppModule { }
=======
    AppComponent,
    TopBarComponent,
    ProductListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

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
>>>>>>> 167d54065cc019452d2090f7d0fa228cd8c1291f
