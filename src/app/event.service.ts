import { Injectable } from '@angular/core';
import { Event, Participant } from './data-models';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EventService {
    // events = EVENTS;
    // event: Event;
    private eventsCollection: AngularFirestoreCollection<Event>;
    private eventDoc: AngularFirestoreDocument<Event>;
    events: Observable<Event[]>;
    event: Observable<Event>;

    constructor(private afs: AngularFirestore) {
        this.eventsCollection = afs.collection<Event>('events', ref => ref.orderBy('id', 'asc'));
        this.events = this.eventsCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Event;
                const id = a.payload.doc.id;
                return { id, ...data};
            }))
        );
    }

    getEvents() {
        return this.events;
    }

    addEvent(event: Event) {
        this.eventsCollection.ref.get().then(querySnapshot => {
            console.log(querySnapshot.size);
            event.id = querySnapshot.size;
            this.eventsCollection.add(event);
        });
    }

    updateEvent(event: Event) {
      this.eventsCollection.ref.where('id', '==', event.id)
        .get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // console.log(doc.id);
            this.eventDoc = this.afs.doc<Event>('events/' + doc.id);
            this.event = this.eventDoc.valueChanges();
            this.eventDoc.update(event);
          });
        });
    }
}

export const EVENTS: Event[] = [
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
      participants: [
        {
            fullName: 'Marice Jade Chua',
            position: 'General Manager',
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
    description: 'This was a despideda for Ms. Jade Chua, PNP-GM'
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
      participants: [
        {
            fullName: 'Marie Maureen Salvaleon',
            position: 'Academic Officer',
            company: 'Passerelles numeriques'
        },
        {
          fullName: 'Kristoff Peralta',
          position: 'Communicatons Officer',
          company: 'Passerelles numeriques'
      },
      {
          fullName: 'Kristine Roxas',
          position: '3rd Year Educator',
          company: 'Passerelles numeriques'
      },
    ],
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
      participants: [
        {
            fullName: 'Jun Rey Ansing',
            position: 'Innovative Technology Trainer',
            company: 'Passerelles numeriques'
        },
        {
            fullName: 'Luke Rafael Alcoseba',
            position: 'IT Admin',
            company: 'Passerelles numeriques'
        },
          {
          fullName: 'Marine Le Mezo',
          position: 'IT Trainer/Volunteer',
          company: 'Passerelles numeriques'
      },
    ],
      description: 'Online class for Amazon Web Services'
    },
];
