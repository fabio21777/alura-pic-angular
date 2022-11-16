import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [AlertComponent],
    imports: [CommonModule],
    exports: [AlertComponent]
})
export class AlertModule {

}
