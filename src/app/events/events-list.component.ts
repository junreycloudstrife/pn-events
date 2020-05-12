import { Component } from '@angular/core';

@Component({
    selector: 'app-events-list',
    template: `
    <h1>This is EventsListComponent</h1>
    <p class="body-content">This is the EventListComponent that implements an inline template</p>
    <p class="body-content">An inline styling also implemented now</p>
    `,
    styles: ['.body-content{ font-size: 25px;}']
})

export class EventsListComponent{

}
