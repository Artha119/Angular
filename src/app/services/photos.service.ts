import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
private baseUrl =environment.url;
  constructor(private _http:HttpClient) { }

  findAllPhotos():Observable<any>{
  return this._http.get(`${this.baseUrl}'/photos`)
  }

  findAllComments():Observable<any>{
    return this._http.get(this.baseUrl+'/comments')
  }

}
