import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient ) { }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`);
  }
}
