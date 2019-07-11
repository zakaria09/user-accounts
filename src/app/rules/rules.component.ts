import { Component, OnInit, Inject, Injector, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { PermissionsSchemeService } from '../services/permissions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.sass']
})
export class RulesComponent implements OnInit {

  rulesTableData: MatTableDataSource<any>;

  displayedColumns = ['schemeId', 'resources', 'priviledges', 'type'];
  
  options = [
    {display: 'E-book', value: 'E-book'}, 
    {display: 'Online Video Course', value: 'Online Video Course'}, 
    {display: 'Module', value: 'Module'}, 
    {display: 'Worksheet', value: 'Worksheet'}
  ]

  error = false;
  loading = true;

  rules: Array<any>;
  courses: Array<any>;

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
          this.rulesTableData = new MatTableDataSource(this.rules);
        },
        error => {
          this.error = true;
          console.log(error)
        }
      )

      this.permissionService.getSchemeById(this.data.schemeId)
        .subscribe((course: Array<any>) => this.courses = course)
  }

  applyFilter(searchTerm: string) {
    this.rulesTableData.filter = searchTerm.trim().toLowerCase();
  }

  selectedFilter(selected) {
    this.rulesTableData.filter = selected.trim().toLowerCase();
  }
}
