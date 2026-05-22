import { TestBed } from '@angular/core/testing';

import { CardContent } from './card-content';

describe('CardContent', () => {
  let service: CardContent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardContent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
