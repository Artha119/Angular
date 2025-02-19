import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDefaultComponent} from './components/product-default/product-default.component';

const routes: Routes = [
  {path:'', redirectTo:'/product/default-product', pathMatch:'full'},
  {path:'default-product', component: ProductDefaultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
