import { Component, OnInit, Input, Output, Inject, AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable, combineLatest } from 'rxjs';
import { MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { PermissionsSchemeService } from 'src/app/services/permissions-scheme.service';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.sass']
})
export class UserPermissionsComponent implements OnInit, AfterViewInit {

  schemeData = [];

  tableData: MatTableDataSource<any>;

  schemes$ = this.permissionservice.getAllSchemes();
  links$ = this.userService.getUserPermissions();

  displayedColumns = ['id', 'name', 'description', 'dateLinked', 'linked'];

  constructor(
    private userService: UsersService,
    private permissionservice: PermissionsSchemeService,
    @Inject(MAT_DIALOG_DATA) public passedData: any
    ) {

    }

  ngOnInit() {
    combineLatest(this.schemes$, this.links$).subscribe(([schemes, links]) => {
      const relevantLinks = links.filter(l => l.userId === this.passedData.id);
      
      relevantLinks.forEach(link => {
        const scheme = schemes.find(s => s.id === link.schemeId);
        if (scheme) {
          const entry = {
            id: scheme.id,
            name: scheme.name,
            description: scheme.description,
            dateLinked: link.dateCreated,
            linked: link.linked,
          }
          console.log('entry Obj',entry)
          this.schemeData.push(entry)
          this.tableData = new MatTableDataSource(this.schemeData);
        } else {
          console.log('couldnt find scheme ID ', link.schemeId);
        }
      })
    });
  }

  ngAfterViewInit() {}
}
