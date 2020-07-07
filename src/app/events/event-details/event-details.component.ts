import { Component, OnInit } from '@angular/core';
import { Event, Participant } from '../../data-models';
import { EventService } from 'src/app/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  getEventSubscription: Subscription;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.eventService.getEvent(this.route.snapshot.params.id)
    .then(event => this.event = event as Event);
  }

  addParticipant(participant: Participant) {
    this.event.participants.push(participant);
    this.eventService.updateEvent(this.event);
  }

  returnToList() {
    this.router.navigate(['/events']);
  }
}
