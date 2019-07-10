import { Injectable } from '@angular/core';
import { permissionScheme } from '../interfaces/permission-scheme.model';
import { Observable, observable } from 'rxjs';
import { Rule } from '../interfaces/rule.model';
import { MatDialog } from '@angular/material';
import { RulesComponent } from '../rules/rules.component';

@Injectable({
  providedIn: 'root'
})
export class PermissionsSchemeService {

  constructor(private modal: MatDialog) { }

  getAllSchemes(): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.permissionSchemes);
      }, 200);
    })
  }

  getAllRules() {
    return new Observable(rule => {
      setTimeout(() => {
        rule.next(this.Rules)
      }, 500)
    })
  }

  openRulesModal(id) {
    this.modal.open(RulesComponent, {
      data: { schemeId: id.id }
    })
  }

  permissionSchemes: permissionScheme[] = [
    {id: 1, name: 'Young People\'s Course', description: 'A course for young people.'},
    {id: 2, name: 'Farming Communities', description: 'A course for farming communities.'},
    {id: 3, name: 'Helicopter Rescue', description: 'A course for Helicopter Rescue.'},
    {id: 4, name: 'Driving Safe', description: 'A course for Driving Safe.'},
    {id: 5, name: 'Modern Yoga Practices', description: 'A course for Modern Yoga Practices.'},
  ]

  Rules: Rule[] = [
    {schemeId: 1, resources: 'E-book_26', priviledges: ['read'], type: 'Allow'},
    {schemeId: 2, resources: 'Modules-106', priviledges: ['see', 'list', 'watch', 'read'], type: 'Allow'},
    {schemeId: 3, resources: 'E-book_19', priviledges: ['read'], type: 'Allow'},
    {schemeId: 4, resources: 'Worksheet', priviledges: ['read', 'see', 'list'], type: 'Allow'},
    {schemeId: 5, resources: 'E-book_11', priviledges: ['read'], type: 'Allow'},
  ]
}
