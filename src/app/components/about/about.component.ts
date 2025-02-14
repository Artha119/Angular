import {Component, OnInit} from '@angular/core';
import {debounceTime, Observable} from 'rxjs';
import {log} from 'util';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  searchText = new FormControl
  ngOnInit(): void {

    this.searchText.valueChanges.pipe(
      debounceTime(5000)/*500*/
    ).subscribe(value => {
      console.log(`will make the request [${{value}}]`)
    })

  }


}
