import { Component } from '@angular/core';
import {PhotosService} from '../../services/photos.service';
import {response} from 'express';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  photos:any[]=[];
constructor(private _service: PhotosService) {
}
  load(){
  this.loadAllPhotos();
  this.loadAllComments()
}
loadAllPhotos(){
  this._service.findAllPhotos().subscribe({
    next:(data)=>this.photos=data,
    error:(error)=> console.log(error),
    complete:()=>console.log('completed')
});
}

  loadAllComments(){
    this._service.findAllComments().subscribe(response=>{
      console.log(response);
    });
  }
}
