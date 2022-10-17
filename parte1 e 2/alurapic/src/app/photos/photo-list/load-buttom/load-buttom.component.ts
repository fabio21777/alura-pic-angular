import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-buttom',
  templateUrl: './load-buttom.component.html',
  styleUrls: ['./load-buttom.component.css']
})
export class LoadButtomComponent implements OnInit {
  @Input()
  hasMore: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
