import { TestBed } from '@angular/core/testing';

import { EventsRouteActivator } from './events-route-activator.service';

describe('EventsRouteActivator', () => {
  let service: EventsRouteActivator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsRouteActivator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
