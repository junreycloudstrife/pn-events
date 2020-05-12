import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../data-models';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @Input() eventInput: Event;
  @Output() eventOutput = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  viewDetails(data: number) {
    this.eventOutput.emit(data);
  }
}
