import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from "rxjs";
import { PhotoService } from "../../photo/photo.service";
import { PhotoComment } from "./photo-comment";
import { switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comment.html',
    styleUrls: ['./photo-comment.css']
})
export class PhotoCommentsComponent implements OnInit {
    commentForm: FormGroup;
    @Input() photoId: number;

    comments$: Observable<PhotoComment[]>;

    constructor(private photoService: PhotoService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {

        this.comments$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)]
        });
    }

    save() {
        const comment = this.commentForm.get('comment').value as string;
        this.comments$ = this.photoService
            .addComment(this.photoId, comment)
            .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
            .pipe(tap(() => {
                this.commentForm.reset();
                alert('Comentário adicionado com sucesso');
            }));
    }

}