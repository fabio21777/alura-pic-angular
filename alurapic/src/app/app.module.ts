import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { SigninComponent } from './home/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [	
    AppComponent,
    SigninComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
