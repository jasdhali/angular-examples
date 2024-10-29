import { TestBed } from '@angular/core/testing';

import { UserPrefServiceService } from './user-pref-service.service';

describe('UserPrefServiceService', () => {
  let service: UserPrefServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPrefServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
