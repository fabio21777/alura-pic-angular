import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient ) { }

  API :string = 'http://localhost:3000/';

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`${this.API}${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
        .append('page', page.toString());

    return this.http
        .get<Photo[]>(this.API  + userName + '/photos', { params: params });
}
}
