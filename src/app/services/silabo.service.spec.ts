import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SilaboService } from './silabo.service';

describe('SilaboService', () => {
  let service: SilaboService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(SilaboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
