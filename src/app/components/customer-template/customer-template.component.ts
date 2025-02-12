import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-customer-template',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    NgOptimizedImage
  ],
  templateUrl: './customer-template.component.html',
  styleUrl: './customer-template.component.scss'
})
export class CustomerTemplateComponent {
  @Input() customer: any;

}
