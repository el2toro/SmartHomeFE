import { NgModule } from '@angular/core';
import { ChangePasswordComponent } from './change-password.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '../login/login-routing.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'angular-bootstrap-md';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [ 
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    MessageModule,
    MessagesModule,
    ToastModule],

    exports: [RouterModule],
    declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule { }

