import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerDefaultComponent} from './components/customer-default/customer-default.component';
import {CustomerListComponent} from './components/customer-default/inner-items/customer-list/customer-list.component';
import {
  CustomerDetailsComponent
} from './components/customer-default/inner-items/customer-details/customer-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/customer/default-customer/list', pathMatch:'full'},
  {path:'default-customer', component: CustomerDefaultComponent, children: [
      {path:'', redirectTo:'/customer/default-customer/list', pathMatch:'full'},
      {path:'list', component:CustomerListComponent},
      {path:'details/:id', component:CustomerDetailsComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
