import { TestBed } from '@angular/core/testing';

import { MainPicturesService } from './main-pictures.service';

describe('MainPicturesService', () => {
  let service: MainPicturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPicturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
