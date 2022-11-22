import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../demo/service/auth/auth.service';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];
    logedInUser: string;
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

  

    constructor(public layoutService: LayoutService, 
                private authService: AuthService,
                private router: Router) {

      this.logedInUser = this.authService.getUser();
      console.log(this.logedInUser)

  }

    logOut(){ 
      this.authService.logOut();
      this.router.navigate(['login']);
    }
}
