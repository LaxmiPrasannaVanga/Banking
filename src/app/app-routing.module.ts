import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddcustomersComponent } from './admin/addcustomers/addcustomers.component';
import { HeaderComponent } from './header/header.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MycustomersComponent } from './admin/mycustomers/mycustomers.component';
import { AtmsimulatorComponent } from './user/atmsimulator/atmsimulator.component';
import { PostnewsComponent } from './admin/postnews/postnews.component';
import { TransferfundsComponent } from './user/transferfunds/transferfunds.component';


const routes: Routes = [
  {path:"adminhome",component:AdminhomeComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"addcustomers",component:AddcustomersComponent},
  //{path:"header",component:HeaderComponent},
//path:"adminlogin",component:AdminloginComponent,children:[{path:"addcustomers",component:AddcustomersComponent,children:[{path:"adminlogin",component:AdminloginComponent}]}]},
  //{path:"addcustomers",component:AddcustomersComponent,children:[{path:"adminlogin",component:AdminloginComponent}]},
  {path:'userhome',component:UserHomeComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'atmsimulator',component:AtmsimulatorComponent},
  {path:'transferfunds',component:TransferfundsComponent},
  {path:"mycustomers",component:MycustomersComponent},
  {path:"postnews",component:PostnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
