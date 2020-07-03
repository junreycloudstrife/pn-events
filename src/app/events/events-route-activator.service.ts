import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EventService } from '../event.service';

@Injectable({
  providedIn: 'root'
})
export class EventsRouteActivator implements CanActivate {

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  canActivate() {
    let isLoggedIn: boolean;
    if (this.eventService.userAccount.value.userName === '' && this.eventService.userAccount.value.password === '') {
      isLoggedIn = false;
      this.router.navigate(['/login']);
    } else {
      isLoggedIn = true;
    }
    return isLoggedIn;
  }
}
