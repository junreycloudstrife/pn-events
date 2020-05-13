import { Component, OnInit } from '@angular/core';
import { Event, Participant } from '../data-models';
import { EventService } from '../event.service';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styles: ['.body-content{ font-size: 25px;}']
})

export class EventsListComponent implements OnInit{
  events: Event[];
  event: Event;
  viewParticipants = false;
  newEvent: Event;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  viewDetails(data: number) {
    this.event = this.eventService.viewDetails(data);
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
