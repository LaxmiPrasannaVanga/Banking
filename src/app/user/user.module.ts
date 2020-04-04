import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AtmsimulatorComponent } from './atmsimulator/atmsimulator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TransferfundsComponent } from './transferfunds/transferfunds.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { NewBalanceComponent } from './new-balance/new-balance.component';
import { SuccessfullComponent } from './successfull/successfull.component';





const routes:Routes=[
  {path:'userhome',component:UserHomeComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'atmsimulator',component:AtmsimulatorComponent},
  ]
@NgModule({
  declarations: [TransferfundsComponent, MyTransactionComponent, AddBeneficiaryComponent, AddDetailsComponent, NewBalanceComponent, SuccessfullComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
