import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { Photo } from 'src/app/model/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  filter : string = '';
  photos :Photo[] = [];
  debounce: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos']
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  onKeyUp(event: any){
    this.debounce.next(event.target.value);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }


}
