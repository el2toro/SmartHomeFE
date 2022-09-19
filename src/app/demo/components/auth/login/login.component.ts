import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {Router} from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/demo/service/auth/auth.service';

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

    valCheck: string[] = ['remember'];

    username!: string
    password!: string;

    constructor(public layoutService: LayoutService, private router: Router, private authService: AuthService) { }

    signIn(){

        console.log(this.username, this.password)
        this.authService.login(this.username, this.password).subscribe(response =>{
            if(response.value != null){
                console.log(response.value)
                
                this.authService.saveToken(response.value.token);
                this.authService.saveUser(this.username);
                this.router.navigate(['/'])
            }
        }),
        (error: HttpResponse<any>) => {
            console.log(error)
        }    
    }
}
