/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SigupComponent } from './sigup.component';

describe('SigupComponent', () => {
  let component: SigupComponent;
  let fixture: ComponentFixture<SigupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
