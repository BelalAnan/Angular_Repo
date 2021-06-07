import { TestBed } from '@angular/core/testing';

import { AddheaderinterceptorInterceptor } from './addheaderinterceptor.interceptor';

describe('AddheaderinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddheaderinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddheaderinterceptorInterceptor = TestBed.inject(AddheaderinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
