import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {authGuard} from './guards/auth.guard';
import {LoginComponent} from './components/login/login.component';

export const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'customer', loadChildren:()=>import('./modules/customer/customer.module')
      .then(m=>m.CustomerModule)},
  {path:'order', loadChildren:()=>import('./modules/order/order.module')
      .then(m=>m.OrderModule)},
  {path:'product', loadChildren:()=>import('./modules/product/product.module')
      .then(m=>m.ProductModule)},
  {path:'dashboard', component:DashboardComponent,canActivate:[authGuard]},
  {path:'login', component:LoginComponent},
  {path:'**', component:NotFoundComponent}
];
