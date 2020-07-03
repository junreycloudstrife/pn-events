import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../data-models';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;

  currentUser: UserAccount = { 
    userName: 'junrey',
    password: 'password'
  };

  isLoggedIn = false;

  constructor(
    private router: Router,
    private eventService: EventService
    ) { }

  ngOnInit(): void {
  }

  login(userAccount: UserAccount) {
    // console.table(userAccount);
    // console.table(this.currentUser);
    if (userAccount.userName === this.currentUser.userName && userAccount.password === this.currentUser.password) {
      this.router.navigate(['/events']);
      this.eventService.updateCurrentUser(userAccount);
    } else {
      console.log('unauthorized');
    }
  }

}
