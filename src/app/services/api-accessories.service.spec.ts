import { TestBed } from '@angular/core/testing';

import { ApiAccessoriesService } from './api-accessories.service';

describe('ApiAccessoriesService', () => {
  let service: ApiAccessoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAccessoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
