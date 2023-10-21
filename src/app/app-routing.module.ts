import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuardService } from './demo/service/guards/auth-guard.service';
import { LoginComponent } from './demo/components/auth/login/login.component';
import { ChangePasswordComponent } from './demo/components/auth/change-password/change-password.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
