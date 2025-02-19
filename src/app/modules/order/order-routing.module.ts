import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderDefaultComponent} from './components/order-default/order-default.component';

const routes: Routes = [
  {path:'', redirectTo:'/order/default-order', pathMatch:'full'},
  {path:'default-order', component: OrderDefaultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
