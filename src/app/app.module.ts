import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home/home.component';
import { P3dComponent } from './p3d/p3d.component';
import { PlmComponent } from './plm/plm.component';
import { JobsComponent } from './jobs/jobs.component';
import { ToolsComponent } from './tools/tools.component';
import { WalletComponent } from './wallet/wallet.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampusComponent } from './campus/campus.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { BannerComponent } from './banner/banner.component'




@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CookieLawModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        JwtModule.forRoot({
            config: {
              tokenGetter: function  tokenGetter() {
                   return     localStorage.getItem('access_token');},
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
        WalletComponent,
        HeaderComponent,
        DashboardComponent,
        CampusComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        BannerComponent


    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { };