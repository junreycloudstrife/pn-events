import { Injectable } from '@angular/core';
import { Event, UserAccount } from './data-models';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
// import { resolve } from 'dns';

@Injectable()
export class EventService {
  private eventsCollection: AngularFirestoreCollection<Event>;
  private eventDoc: AngularFirestoreDocument<Event>;
  events: Observable<Event[]>;
  
  userAccount = new BehaviorSubject<UserAccount>({userName: '', password: ''});
  currentUserAccount = this.userAccount.asObservable();

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

  async getEvent(id:number): Promise<Event> {
    let event: Event;
    await this.eventsCollection.ref.where('id', '==', Number(id))
    .get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        event = doc.data() as Event;
      })
    });
    return event;
  }

  // getEvent(id:number) {
  //   return new Promise(resolve => {
  //     this.eventsCollection.ref.where('id', '==', Number(id))
  //     .get().then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         resolve(doc.data())
  //       })
  //     })
  //   }) 
  // }

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
          this.eventDoc = this.afs.doc<Event>('events/' + doc.id);
          this.eventDoc.update(event);
        });
      });
  }

  updateCurrentUser(userAccount: UserAccount) {
    this.userAccount.next(userAccount);
  }
}
