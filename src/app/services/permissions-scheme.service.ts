import { Injectable } from '@angular/core';
import { permissionScheme } from '../interfaces/permission-scheme.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsSchemeService {

  constructor() { }

  getAllSchemes(): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.permissionSchemes);
      }, 200);
    })
  }

  permissionSchemes: permissionScheme[] = [
    {id: 1, name: 'Young People\'s Course', description: 'A course for young people.'},
    {id: 2, name: 'Farming Communities', description: 'A course for farming communities.'},
    {id: 3, name: 'Helicopter Rescue', description: 'A course for Helicopter Rescue.'},
    {id: 4, name: 'Driving Safe', description: 'A course for Driving Safe.'},
    {id: 5, name: 'Modern Yoga Practices', description: 'A course for Modern Yoga Practices.'},
  ]
}
