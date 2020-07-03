import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, Participant, UserAccount } from '../data-models';
import { EventService } from '../event.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  // currentUser: UserAccount;
  // getCurrentUserSubscription: Subscription;

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

    // this.getCurrentUserSubscription = this.eventService.currentUserAccount
    //   .subscribe(currentUser => {
    //     console.log(currentUser);
    //   })
  }

  ngOnDestroy() {
    this.getEventsSubscription.unsubscribe();
    // this.getCurrentUserSubscription.unsubscribe();
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
    this.events.map(event => {
      if (event.id === this.event.id) {
        console.log(event);
        event.participants.push(participant);
        this.eventService.updateEvent(event);
      }
    });
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
}
