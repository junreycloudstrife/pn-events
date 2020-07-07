import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Participant } from '../../data-models';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {
  fullName;
  position;
  company;

  @Input() participants: Participant[];
  @Output() backButton = new EventEmitter();
  @Output() addParticipant = new EventEmitter<Participant>();
  constructor() { }

  ngOnInit(): void {
  }

  register(participant: Participant) {
    this.addParticipant.emit(participant);
    this.fullName = '';
    this.position = '';
    this.company = '';
  }
}
