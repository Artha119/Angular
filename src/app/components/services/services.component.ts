import { Component } from '@angular/core';
import {SearchBarTemplateComponent} from '../search-bar-template/search-bar-template.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    SearchBarTemplateComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
searchText='';
setSearchText(value:any){
  this.searchText=value;
}
}
