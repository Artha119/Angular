import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-customer-default',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './customer-default.component.html',
  styleUrl: './customer-default.component.scss'
})
export class CustomerDefaultComponent {

}
