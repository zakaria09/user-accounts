import { Component, OnInit, Inject, Injector, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PermissionsSchemeService } from '../services/permissions.service';
import { UsersDetailsComponent } from '../users/users-details/users-details.component';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.sass']
})
export class RulesComponent implements OnInit, AfterViewInit {

  error = false;

  permissionService: PermissionsSchemeService;

  constructor(
    private modalRef: MatDialogRef<UsersDetailsComponent>,
    private injector: Injector
    //private permissionService: PermissionsSchemeService
  ) {
    this.permissionService = this.injector.get(PermissionsSchemeService);
    console.log(this.permissionService)
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.modalRef.close();
    this.permissionService.getAllRules()
      .subscribe(
        result => {
          console.log(result)
        },
        error => {
          this.error = true;
          console.log(error)
        }
      )
  }

}
