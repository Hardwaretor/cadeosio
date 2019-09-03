import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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