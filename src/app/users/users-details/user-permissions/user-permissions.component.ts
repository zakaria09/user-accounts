import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PermissionsSchemeService } from 'src/app/services/permissions-scheme.service';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.sass']
})
export class UserPermissionsComponent implements OnInit {

  permissions;

  constructor(
    private userService: UsersService,
    private permissionservice: PermissionsSchemeService,
    @Inject(MAT_DIALOG_DATA) public passedData: any
    ) { }

  ngOnInit() {
    this.findUserPermission(this.passedData.id);
    this.findSchemeId(2);
    console.log(this)
  }

  findUserPermission(id) {
    this.userService.getUserPermissions()
      .subscribe(permission => this.permissions = permission.filter(p => p.userId === id))
  }

  findSchemeId(id) {
    this.permissionservice.getAllSchemes()
      .subscribe(scheme => console.log(scheme.filter(p => p.id === id)))
      console.log(this.permissions)
      // find the object with the id relating to the schemeId 
      // add the properties to the to the object with the schemeId
  }
}
