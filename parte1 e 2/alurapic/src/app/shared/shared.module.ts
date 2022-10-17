import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { VmensagemComponent } from './vmensagem/vmensagem.component';



@NgModule({
  declarations: [
    CardComponent,
    VmensagemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    VmensagemComponent
  ]

})
export class SharedModule { }
