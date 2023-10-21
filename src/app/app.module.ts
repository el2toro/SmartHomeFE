import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//PrimeNg Modules
import {PanelModule} from 'primeng/panel';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';

import { AuthService } from './demo/service/auth/auth.service';
import { AuthGuardService } from './demo/service/guards/auth-guard.service';
import { WeatherService } from './demo/service/weather/weather.service';
import { MessageService } from 'primeng/api';
import { ChangePasswordComponent } from './demo/components/auth/change-password/change-password.component';
import { ChangePasswordModule } from './demo/components/auth/change-password/change-password.module';
import { LoginModule } from './demo/components/auth/login/login.module';
import { DashboardComponent } from './demo/components/dashboard/dashboard.component';
import { DashboardModule } from './demo/components/dashboard/dashboard.module';

@NgModule({
    declarations: [
        AppComponent, 
        NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BrowserModule,
        HttpClientModule,
        PanelModule,
        PasswordModule,
        ButtonModule,
        CheckboxModule,
        ToastModule,
        LoginModule,
        ChangePasswordModule,
        DashboardModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, 
        CustomerService, 
        EventService, 
        IconService, 
        NodeService,
        PhotoService, 
        ProductService, 
        AuthService, 
        AuthGuardService, 
        WeatherService, 
        MessageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
