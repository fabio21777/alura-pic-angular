/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SigupNotTakenValidationService } from './sigupNotTakenValidation.service';

describe('Service: SigupNotTakenValidation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigupNotTakenValidationService]
    });
  });

  it('should ...', inject([SigupNotTakenValidationService], (service: SigupNotTakenValidationService) => {
    expect(service).toBeTruthy();
  }));
});
