import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    templateUrl: './photo.details.component.html',
    styleUrls: ['./photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute,
        private photoService: PhotoService) { }

    photo$: Observable<Photo>

    ngOnInit(): void {
        this.photo$ = this.photoService.findById(
            this.route.snapshot.params.photoId
        )
    }
}

