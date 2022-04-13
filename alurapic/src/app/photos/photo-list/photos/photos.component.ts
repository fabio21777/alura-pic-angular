import { Component, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { Photo } from 'src/app/model/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input()
  photos!: Photo[];
  rows: any[] = [];



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos']) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];
    for(let index = 0; index< photos.length; index += 3 ){
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

}
