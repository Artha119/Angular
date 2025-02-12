import {Photo} from './Photo';

export class PhotosDto implements Photo{
  albumId:number;
  id:number;
  title:string;
  url:string;
  thumbnailUrl:string;

  constructor(albumId:number, id:number, title: string, thumbnailUrl:string, url:string) {
  this.id=id;
  this.albumId=albumId;
  this.thumbnailUrl=thumbnailUrl;
  this.title=title;
  this.url=url;
  }

}
