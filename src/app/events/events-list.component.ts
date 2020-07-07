import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../data-models';
import { EventService } from '../event.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit, OnDestroy{
  events: Event[];
  event: Event;
  viewParticipants = false;
  newEvent: Event;
  getEventsSubscription: Subscription;

  constructor(
    private eventService: EventService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getEventsSubscription = this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
        console.log(this.events);
      });

  }

  ngOnDestroy() {
    this.getEventsSubscription.unsubscribe();
  }
  
  addEvent(event: Event) {
    this.eventService.addEvent(event);
  }

  logout() {
    this.eventService.updateCurrentUser({
      userName: '',
      password: ''
    });
    this.router.navigate(['/login']);
  }

  viewEvent(event: Event) {
    this.router.navigate(['/events', event.id]);
  }

}
