import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/demo/service/auth/auth.service';
import { MessageService } from 'primeng/api';
import { AuthResponseModel } from 'src/app/models/login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .p-password input {
            width: 100%;
            padding:1rem;
        }

        :host ::ng-deep .pi-eye{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }

        :host ::ng-deep .pi-eye-slash{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

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

    signIn(){
        this.invalidUsername = false;
        this.invalidPassword = false;
        console.log(this.valCheck)
        this.authService.login(this.username, this.password).subscribe({ 
        next: (response) =>{
            if(response.value != null){             
                this.authService.saveToken(response.value.token);
                this.authService.saveUser(this.username);
                this.router.navigate(['/'])
            }
        },
        error: (error: HttpResponse<any>) => {
            if(error.status === 400){
                this.invalidPassword = true;
                this.messageService.add({severity:'error', summary:'Wrong password', detail:'The entered password is invalid. Please try again'})
               
            }
            else if(error.status === 404){
                this.invalidUsername = true;
                this.messageService.add({severity:'error', summary:'User not found', detail:'Please try again'})
            }
            else{
                this.messageService.add({severity:'error', summary:'Server error', detail:'Something went wrong'})          
            }
        }     
    })}; 

    forgotPassword(){
        this.router.navigate(['/forgotPassword'])
    }
}
