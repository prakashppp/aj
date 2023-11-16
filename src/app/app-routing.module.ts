import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { InvalidComponent } from './components/invalid/invalid.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotPassComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'admin',canActivate:[AuthGuard],loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path:'**',component:InvalidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
