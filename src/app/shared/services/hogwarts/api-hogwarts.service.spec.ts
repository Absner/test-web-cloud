import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiHogwartsService } from './api-hogwarts.service';

describe('ApiHogwartsService', () => {
  let service: ApiHogwartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiHogwartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
