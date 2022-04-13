import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/model/photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos :Photo[] = [];

  constructor( private photoService: PhotosService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.paramMap.get('userName') ||'';
    this.photoService.listFromUser(userName)
    .subscribe(photos => this.photos = photos);
  }

}
