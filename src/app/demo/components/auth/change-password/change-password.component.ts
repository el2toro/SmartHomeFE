import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth/auth.service';
import { MessageService } from 'primeng/api';
import { RessetPasswordModel } from 'src/app/models/resset-password/resset-password.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public layoutService: LayoutService, 
              private router: Router, 
              private authService: AuthService,
              private messageService: MessageService) { }

    ressetPassword: RessetPasswordModel = new RessetPasswordModel();
    repeatPassword!: string;
    invalidUsername: boolean;
    invalidPassword: boolean;          

  ngOnInit(): void {
  }

  signIn(){

  }

  resetPassword(){
    this.ressetPassword.username = this.authService.getUser();

    console.log(this.ressetPassword)

    this.authService.ressetPassword(this.ressetPassword).subscribe({
      next: (result) => {
        console.log(result)
      },
      error: (onError) => {
        console.log(onError)
      }
    })
    
  }

}
