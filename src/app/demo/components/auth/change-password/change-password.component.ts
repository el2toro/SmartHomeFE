import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/demo/service/auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    //styles: [``]
})
export class ChangePasswordComponent {

    valCheck: boolean;

    username!: string
    password!: string;

    invalidUsername: boolean;
    invalidPassword: boolean;

    constructor(public layoutService: LayoutService, 
                private router: Router, 
                private authService: AuthService,
                private messageService: MessageService) {
   }

}