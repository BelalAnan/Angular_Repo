import { TestBed } from '@angular/core/testing';

import { LogresponseInterceptor } from './logresponse.interceptor';

describe('LogresponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LogresponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LogresponseInterceptor = TestBed.inject(LogresponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
