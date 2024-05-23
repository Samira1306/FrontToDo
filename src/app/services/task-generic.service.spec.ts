import { TestBed } from '@angular/core/testing';

import { TaskGenericService } from './task-generic.service';

describe('TaskGenericService', () => {
  let service: TaskGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
