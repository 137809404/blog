import { TestBed } from '@angular/core/testing';

import { AccidentDscriptionServiceService } from './accident-dscription-service.service';

describe('AccidentDscriptionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccidentDscriptionServiceService = TestBed.get(AccidentDscriptionServiceService);
    expect(service).toBeTruthy();
  });
});
