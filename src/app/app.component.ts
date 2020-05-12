import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pn-events';
  event = EVENT;
}

export const EVENT = {
  id: 0,
  name: 'Be Angularized',
  category: 'Talks@PN',
  speaker: 'Juan dela Cruz',
  emcee: 'Nanit Katipunan',
  time: '10:00 AM',
  date: '05/02/2020',
  duration: 3,
  venue: {
    address: 'Carmelite Compound',
    building: 'Basketball court',
    room: ''
  },
  onlineUrl: '',
  participants: [
      {
          fullName: 'Jun Rey Ansing',
          position: 'Innovative Technology Trainer',
          company: 'Passerelles numeriques'
      },
      {
        fullName: 'Rene Abdallah',
        position: 'IT/Training Manager',
        company: 'Passerelles numeriques'
    },
    {
        fullName: 'Marine Le Mezo',
        position: 'IT Trainer/Volunteer',
        company: 'Passerelles numeriques'
    },
],
  description: 'This is all about opportunities with Angular '
};
