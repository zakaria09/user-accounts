import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { ThemeServiceService } from './services/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private themeService: ThemeServiceService
    ) {}

  users;

  otherTheme: boolean;

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(result => result)

    this.themeService.currentTheme
      .subscribe(theme => this.otherTheme = theme)
  }


}
