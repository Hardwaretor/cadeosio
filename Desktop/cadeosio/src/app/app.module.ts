﻿import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home/home.component';
import { P3dComponent } from './p3d/p3d.component';
import { PlmComponent } from './plm/plm.component';
import { JobsComponent } from './jobs/jobs.component';
import { ToolsComponent } from './tools/tools.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampusComponent } from './campus/campus.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './_services';
import { UploadComponent } from './upload/upload.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletModule } from './wallet/wallet.module';
import AnchorLink from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CookieLawModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        WalletModule,
        JwtModule.forRoot({
            config: {
              tokenGetter: function  tokenGetter() {
                   return     localStorage.getItem('jwtToken');},
              whitelistedDomains: ['cadeos.io'],
              blacklistedRoutes: ['']
            }
          })

    ],

 
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        P3dComponent,
        PlmComponent,
        JobsComponent,
        ToolsComponent,
        HeaderComponent,
        DashboardComponent,
        CampusComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        UploadComponent,
        ProfileComponent

 ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthenticationService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    ],
    bootstrap: [AppComponent],

    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { };