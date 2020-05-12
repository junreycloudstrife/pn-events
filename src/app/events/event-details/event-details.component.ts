import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @Input() eventInput: any;
  @Output() eventOutput = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  viewDetails(data) {
    this.eventOutput.emit(data);
  }
}
