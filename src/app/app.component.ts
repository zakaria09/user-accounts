import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private userService: UsersService) {}

  users;

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(result => result)
  }
}
