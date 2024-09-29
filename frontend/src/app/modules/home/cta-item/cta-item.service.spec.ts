import { TestBed } from '@angular/core/testing';

import { CtaItemService } from './cta-item.service';

describe('CtaItemService', () => {
  let service: CtaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
