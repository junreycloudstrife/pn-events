import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, Participant } from '../data-models';
import { EventService } from '../event.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styles: ['.body-content{ font-size: 25px;}']
})

export class EventsListComponent implements OnInit, OnDestroy{
  events: Event[];
  event: Event;
  viewParticipants = false;
  newEvent: Event;
  getEventsSubscription: Subscription;

  constructor(private eventService: EventService) {}

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

  viewDetails(data: number) {
    this.events.map(event => {
      if (event.id === data) {
        this.event = event;
       }
    });
    this.viewParticipants = true;
  }

  returnToList() {
    this.viewParticipants = false;
  }

  addParticipant(participant: Participant) {
    this.eventService.addParticipants(participant);
  }

  addEvent(event: Event) {
    this.eventService.addEvent(event);
  }
}
