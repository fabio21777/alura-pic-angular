import { TestBed } from '@angular/core/testing';

import { PhotoListResolver } from './photo-list.resolver';

describe('PhotoListResolver', () => {
  let resolver: PhotoListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhotoListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
