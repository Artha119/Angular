import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {log} from 'util';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{

  myObserver = new Observable((observer)=>{
    console.log('Started Observable!');
    setTimeout(()=> observer.next(1),1000);
    setTimeout(()=> observer.next(2),1000);
    setTimeout(()=> observer.next(3),1000);
    setTimeout(()=> observer.next(4),1000);
    setTimeout(()=> observer.next(5),1000);
    setTimeout(()=> observer.next(6),1000);
    console.log('Ended Observable!');

  })
ngOnInit() {
  this.myObserver.subscribe({
next:(data)=> console.log(data),
    error:(err)=>console.log(err),
    complete:()=>console.log('Completed')
  });
}
}
