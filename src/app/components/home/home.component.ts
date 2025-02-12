import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgOptimizedImage} from '@angular/common';
import {CustomerTemplateComponent} from '../customer-template/customer-template.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgOptimizedImage,
    NgForOf,
    CustomerTemplateComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
customers:any[]=[
  {
    id:'C001',
    name:'Kamal Silva',
    salary:25000,
    avatar:'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'},
  {
    id:'C002',
    name:'Kamal Silva',
    salary:25000,
    avatar:'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid'},
  {
    id:'C003',
    name:'Kamal Silva',
    salary:25000,
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzOnbioNr7EzYwomOHvDr03aU-anMWCS0Vw&s'
  },
  {
    id:'C004',
    name:'Kamal Silva',
    salary:25000,
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEprhtWyBVBtryl1_P93Wm3JhBbMx49BqYMA&s'
  },
  {
    id:'C005',
    name:'Kamal Silva',
    salary:25000,
    avatar:'https://marketplace.canva.com/EAFqhoRVTgA/1/0/1600w/canva-grey-and-blue-cute-cartoon-anime-manga-illustrated-boy-profile-photo-avatar-u9aFvuQMzUk.jpg'
  }
]
}
