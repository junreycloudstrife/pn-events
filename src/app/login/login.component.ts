import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../data-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;

  constructor() { }

  ngOnInit(): void {
  }

  login(value: any) {
    console.table(value);
  }

}
