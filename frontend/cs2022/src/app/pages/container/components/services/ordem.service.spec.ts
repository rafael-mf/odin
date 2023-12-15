/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrdemService } from './ordem.service';

describe('Service: Ordem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdemService]
    });
  });

  it('should ...', inject([OrdemService], (service: OrdemService) => {
    expect(service).toBeTruthy();
  }));
});
