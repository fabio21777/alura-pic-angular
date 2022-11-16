import { AlertService } from './../../shared/components/alert/alert.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Photo } from "../photo/photo";
import { PhotoComment } from "./photo-comments/photo-comment";
import { PhotoService } from "../photo/photo.service";
import { UserService } from 'src/app/core/user/user.service';

@Component({
  templateUrl: "./photo.details.component.html",
  styleUrls: ["./photo-details.css"],
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;
  comments$: Observable<PhotoComment[]>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(id);
    this.comments$ = this.photoService.getComments(id);
  }

  remove() {
    const id = this.route.snapshot.params.photoId;
    this.photoService
      .removePhoto(id)
      .subscribe(() => {
        this.alertService.success("Photo removed");
        this.router.navigate(['/user', this. userService.getUserName()]);
      },
      err => {
        this.alertService.warning("Could not delete the photo");
        console.log(err);
      });
  }
}
