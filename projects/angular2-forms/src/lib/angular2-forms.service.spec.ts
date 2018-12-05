import { TestBed, inject } from '@angular/core/testing';

import { Angular2FormsService } from './angular2-forms.service';

describe('Angular2FormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Angular2FormsService]
    });
  });

  it('should be created', inject([Angular2FormsService], (service: Angular2FormsService) => {
    expect(service).toBeTruthy();
  }));
});
