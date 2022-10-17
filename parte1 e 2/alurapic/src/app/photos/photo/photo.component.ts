import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  title = 'alurapic';
  @Input()
  description = '';
  @Input()
  url = '';
}
