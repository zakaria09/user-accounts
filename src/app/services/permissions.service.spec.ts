import { TestBed } from '@angular/core/testing';

import { PermissionsSchemeService } from './permissions.service';

describe('PermissionsSchemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermissionsSchemeService = TestBed.get(PermissionsSchemeService);
    expect(service).toBeTruthy();
  });
});
