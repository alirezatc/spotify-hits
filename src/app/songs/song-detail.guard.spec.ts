import { TestBed, async, inject } from '@angular/core/testing';

import { SongDetailGuard } from './song-detail.guard';

describe('SongDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongDetailGuard]
    });
  });

  it('should ...', inject([SongDetailGuard], (guard: SongDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
