import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtomComponent } from './photo-list/load-buttom/load-buttom.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './photo-list/search/search.component';



@NgModule({
  declarations: [ PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent,FilterByDescription, LoadButtomComponent, SearchComponent ],
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule

  ]
})
export class PhotosModule { }
