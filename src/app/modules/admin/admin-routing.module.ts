import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'',component:AdminDashComponent,
   children: [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'services',component:ServicesComponent},
    {path:'contact',component:ContactComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
