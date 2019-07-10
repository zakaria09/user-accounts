import { Component, OnInit, Inject, Injector, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PermissionsSchemeService } from '../services/permissions.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.sass']
})
export class RulesComponent implements OnInit, AfterViewInit {

  error = false;
  loading = true;

  rules: Array<any>;

  permissionService: PermissionsSchemeService;

  constructor(
    private injector: Injector,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.permissionService = this.injector.get(PermissionsSchemeService);
  }

  ngOnInit() {
    this.permissionService.getAllRules()
      .subscribe(
        (rules: Array<any>) => {
          this.loading = false;
          this.rules = rules.filter(r => r.schemeId === this.data.schemeId);
        },
        error => {
          this.error = true;
          console.log(error)
        }
      )
  }

  ngAfterViewInit() {

  }

}
