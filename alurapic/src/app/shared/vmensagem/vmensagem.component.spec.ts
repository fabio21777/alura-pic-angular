/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VmensagemComponent } from './vmensagem.component';

describe('VmensagemComponent', () => {
  let component: VmensagemComponent;
  let fixture: ComponentFixture<VmensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
