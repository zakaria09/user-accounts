import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable, combineLatest } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PermissionsSchemeService } from 'src/app/services/permissions-scheme.service';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.sass']
})
export class UserPermissionsComponent implements OnInit {

  // permissions: Array<any>;
  // schemes = [];
  // permissionSchemes: Array<any>;
  schemeData = [];

  _schemes = [];
  _links = [];

  constructor(
    private userService: UsersService,
    private permissionservice: PermissionsSchemeService,
    @Inject(MAT_DIALOG_DATA) public passedData: any
    ) {

      const schemes$ = this.permissionservice.getAllSchemes();
      const links$ = this.userService.getUserPermissions();

      combineLatest(schemes$, links$).subscribe(([schemes, links]) => {

        const schemeData = [];
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
            schemeData.push(entry)
          } else {
            console.log('couldnt find scheme ID ', link.schemeId);
          }
        })

        this.schemeData = schemeData;
      });

    }

  ngOnInit() {
  }
}
