import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.sass']
})
export class UsersDetailsComponent implements OnInit {

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public passedData: any,
    private userService: UsersService,
    ) { }

  ngOnInit() {
    //console.log(this.passedData)
  }
}
