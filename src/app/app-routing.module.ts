import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsRouteActivator } from './events/events-route-activator.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'events', component: EventsListComponent, canActivate: [EventsRouteActivator] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventsRouteActivator] },
  { path: '', redirectTo: '/login', pathMatch: 'prefix' }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],  // with debugging
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
