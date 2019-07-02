import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UsersDetailsComponent } from './users-details/users-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  accounts: Observable<any[]>;

  searchTerm;

  constructor(
    private userService: UsersService,
    private modal: MatDialog
    ) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(users => this.accounts = users)
  }

  openProfile(account) {
    console.log(account)
    this.modal.open(UsersDetailsComponent, {
      width: '180em',
      height: '50%',
      data: {
        id: account.id,
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email
      }
    })
  }
}
