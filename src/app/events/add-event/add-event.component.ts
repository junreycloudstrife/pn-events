import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;
  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      name: new FormControl(),
      category: new FormControl(),
      speaker: new FormControl(),
      emcee: new FormControl(),
      time: new FormControl(),
      date: new FormControl(),
      duration: new FormControl(),
      venue: new FormGroup({
        address: new FormControl(),
        building: new FormControl(),
        room: new FormControl()
      }),
      onlineUrl: new FormControl(),
      participants: new FormControl([]),
      description: new FormControl()
    });
  }

  addEvent(eventForm: any) {
    this.event.emit(eventForm);
  }
}
