import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vmensagem',
  templateUrl: './vmensagem.component.html',
  styleUrls: ['./vmensagem.component.css']
})
export class VmensagemComponent {
  @Input()
  texto: string | undefined;

}
