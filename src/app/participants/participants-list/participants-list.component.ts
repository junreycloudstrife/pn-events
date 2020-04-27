import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {

  @Input() participants: any;
  @Output() backButton = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  returnToList() {
    this.backButton.emit();
  }
}
