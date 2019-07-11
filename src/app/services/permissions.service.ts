import { Injectable } from '@angular/core';
import { permissionScheme } from '../interfaces/permission-scheme.model';
import { Observable, observable } from 'rxjs';
import { Rule } from '../interfaces/rule.model';
import { MatDialog } from '@angular/material';
import { RulesComponent } from '../rules/rules.component';
import { map } from 'rxjs/operators';

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

  getSchemeById(id) {
    return new Observable(rule => {
      setTimeout(() => {
        this.getAllSchemes().subscribe((scheme: Array<any>) => {
          rule.next(scheme.filter(s => s.id === id))
        })
      }, 100)
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
    {schemeId: 1, resources: 'E-book_26', priviledges: 'read', type: 'Allow'},
    {schemeId: 1, resources: 'Online Video Course - 710', priviledges: 'watch', type: 'Allow'},
    {schemeId: 1, resources: 'E-book_2', priviledges: 'read', type: 'Allow'},
    {schemeId: 1, resources: 'Module-106', priviledges: 'read', type: 'Allow'},
    {schemeId: 1, resources: 'E-book_46', priviledges: 'read', type: 'Allow'},
    {schemeId: 1, resources: 'Worksheet-103', priviledges: 'read', type: 'Allow'},
    {schemeId: 2, resources: 'Module-106', priviledges: 'see', type: 'Allow'},
    {schemeId: 2, resources: 'Online Video Course - 711', priviledges: 'watch', type: 'Allow'},
    {schemeId: 2, resources: 'Online Video Course - 717', priviledges: 'watch', type: 'Allow'},
    {schemeId: 2, resources: 'E-book_14', priviledges: 'see', type: 'Allow'},
    {schemeId: 3, resources: 'Module-109', priviledges: 'list', type: 'Allow'},
    {schemeId: 3, resources: 'Module-101', priviledges: 'see', type: 'Allow'},
    {schemeId: 3, resources: 'E-book_19', priviledges: 'list', type: 'Allow'},
    {schemeId: 4, resources: 'Online Video Course - 716', priviledges: 'watch', type: 'Allow'},
    {schemeId: 4, resources: 'Worksheet-102', priviledges: 'read', type: 'Allow'},
    {schemeId: 4, resources: 'Online Video Course - 7112', priviledges: 'watch', type: 'Allow'},
    {schemeId: 4, resources: 'Worksheet-101', priviledges: 'read', type: 'Allow'},
    {schemeId: 5, resources: 'Worksheet', priviledges: 'read', type: 'Allow'},
    {schemeId: 5, resources: 'Modules-110', priviledges: 'read', type: 'Allow'},
    {schemeId: 5, resources: 'Module-177', priviledges: 'read', type: 'Allow'},
    {schemeId: 5, resources: 'E-book_144', priviledges: 'read', type: 'Allow'},
  ]
}
