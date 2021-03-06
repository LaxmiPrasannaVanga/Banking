import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddcustomersComponent } from './addcustomers/addcustomers.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MycustomersComponent } from './mycustomers/mycustomers.component';
 

import { PostnewsComponent } from './postnews/postnews.component';
import { EditandupdateComponent } from './editandupdate/editandupdate.component';


const routes: Routes = [
  {path:"addcustomer",component:AddcustomersComponent},
  {path:"adminlogin",component:AdminloginComponent,children:[{path:"addcustomers",component:AddcustomersComponent,children:[{path:"adminlogin",component:AdminloginComponent}]}]},
  {path:"addcustomers",component:AddcustomersComponent,children:[{path:"adminlogin",component:AdminloginComponent}]},
  // {path:"adminhome",component:AdminhomeComponent,children:[{path:"addcustomer",component:AddcustomersComponent}]},
  {path:"editandupdate",component:EditandupdateComponent}
];

@NgModule({
  declarations: [AdminhomeComponent, AdminloginComponent, AddcustomersComponent, MycustomersComponent,  EditandupdateComponent, PostnewsComponent],
  imports: [RouterModule.forChild(routes),
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [AdminhomeComponent,AddcustomersComponent]
})
export class AdminModule { }
