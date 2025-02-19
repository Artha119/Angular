import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerDefaultComponent} from './components/customer-default/customer-default.component';

const routes: Routes = [
  {path:'', redirectTo:'/customer/default-customer', pathMatch:'full'},
  {path:'default-customer', component: CustomerDefaultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
