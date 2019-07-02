import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.sass']
})
export class UserPermissionsComponent implements OnInit {

  permissions: Observable<any[]>;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUserPermissions()
      .subscribe(permission => this.permissions = permission)
  }

}
