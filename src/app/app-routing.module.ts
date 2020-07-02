import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventsListComponent } from './events/events-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'events', component: EventsListComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],  // with debugging
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
