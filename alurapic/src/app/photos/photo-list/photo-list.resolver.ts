import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PhotosService } from '../photos.service';
import { Photo } from 'src/app/model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

  constructor(private service: PhotosService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userName = route.params['userName'] || '';
        return this.service.listFromUserPaginated(userName,1);
    }
}
