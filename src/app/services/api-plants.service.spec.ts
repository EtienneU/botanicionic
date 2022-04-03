import { TestBed } from '@angular/core/testing';

import { ApiPlantsService } from './api-plants.service';

describe('ApiPlantsService', () => {
  let service: ApiPlantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPlantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
