import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from 'src/app/shared/directives/immediateClickDirective/immediate-click.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
         CommonModule,
         ReactiveFormsModule,
         FormsModule,
         VMessageModule,
         RouterModule,
         PhotoModule,
         ImmediateClickModule

        ]
})
export class PhotoFormModule { }