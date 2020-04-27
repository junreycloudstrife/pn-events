import { Component } from '@angular/core';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styles: ['.body-content{ font-size: 25px;}']
})

export class EventsListComponent{
    events = EVENTS;
}

export const EVENTS = [
    {
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
      participants: [],
      description: 'This is all about opportunities with Angular '
    },
    {
      id: 1,
      name: 'Thank You Ate Jade',
      category: 'Despidida Event',
      speaker: '',
      emcee: 'Aeromel Laure',
      time: '1:00 PM',
      date: '12/21/2019',
      duration: 3,
      venue: {
        address: 'Carmelite Compound',
        building: 'Basketball court',
        room: ''
      },
      onlineUrl: '',
      participants: [],
      description: 'This was a despideda for Ms. Jade Chua, PNP General Manager'
    },
    {
      id: 2,
      name: 'Job Fair 2020',
      category: 'Job Fair',
      speaker: 'Orville Avila and others',
      emcee: 'Thessa Torre',
      time: '8:00 AM',
      date: '02/10/2020',
      duration: 4,
      venue: {
        address: 'USC Talamban',
        building: 'LRC Building',
        room: 'Audio-Visual Room'
      },
      onlineUrl: '',
      participants: [],
      description: 'OJT-Hunting for Class 2020B'
    },
    {
      id: 3,
      name: 'Introduction to AWS',
      category: 'Online Class',
      speaker: 'Rene Abdallah',
      emcee: '',
      time: '8:00 AM',
      date: '05/03/2020',
      duration: 3,
      venue: {
        address: 'Carmelites Compound',
        building: 'Main Buiding',
        room: 'Computer Lab'
      },
      onlineUrl: 'https://www.aws.com',
      participants: [],
      description: 'Online class for Amazon Web Services'
    },
];
