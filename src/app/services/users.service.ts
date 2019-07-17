import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.model';
import { Permission } from '../interfaces/permission.model';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers(): Observable<any> {
    return new Observable(observer => {
      observer.next(this.users)
    })
  }

  getUserPermissions(): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.permissions);
      }, 600);
    })
  }

  changeUserPassword(user, password): Observable<any> {
    let passwordChanged: Boolean = true;
    return new Observable(observable => {
      // simulate making the API call
      setTimeout(() => {
        if (passwordChanged) {
          observable.next(
            {
              fullName: `${user.firstName} ${user.lastName}`,
              isSuccess: true,
              isLoading: false
            }
          );
          observable.complete();
        } else {
          observable.error('Something went wrong! The password wasnt changed.');
        };
      }, 1000)
    })
  }

  permissions: Permission[] = [
    {userId: 1, schemeId: 1, dateCreated: new Date(), linked: 'person 1'},
    {userId: 1, schemeId: 2, dateCreated: new Date(), linked: 'person 92'},
    {userId: 2, schemeId: 2, dateCreated: new Date(), linked: 'person 2'},
    {userId: 2, schemeId: 3, dateCreated: new Date(), linked: 'person 48'},
    {userId: 2, schemeId: 4, dateCreated: new Date(), linked: 'person 27'},
    {userId: 3, schemeId: 3, dateCreated: new Date(), linked: 'person 3'},
    {userId: 4, schemeId: 4, dateCreated: new Date(), linked: 'person 4'},
    {userId: 5, schemeId: 5, dateCreated: new Date(), linked: 'person 5'},
    {userId: 6, schemeId: 1, dateCreated: new Date(), linked: 'person 6'},
    {userId: 7, schemeId: 2, dateCreated: new Date(), linked: 'person 7'},
    {userId: 8, schemeId: 2, dateCreated: new Date(), linked: 'person 8'},
    {userId: 9, schemeId: 5, dateCreated: new Date(), linked: 'person 9'},
    {userId: 10, schemeId: 2, dateCreated: new Date(), linked: 'person 10'},
    {userId: 11, schemeId: 4, dateCreated: new Date(), linked: 'person 11'},
    {userId: 12, schemeId: 4, dateCreated: new Date(), linked: 'person 12'},
  ]

  users: User[] = [
    {id: 1, firstName: 'lark', lastName: 'Kent', email: 'clark@test.com'},
    {id: 2, firstName: 'Ileen', lastName: 'Padillo', email: 'clark@test.com'},
    {id: 3, firstName: 'Letty', lastName: 'Dame', email: 'Letty@test.com'},
    {id: 4, firstName: 'Evon', lastName: 'Orndorff', email: 'Evon@test.com'},
    {id: 5, firstName: 'Barabara', lastName: 'Sandy', email: 'Barabara@test.com'},
    {id: 6, firstName: 'Margo', lastName: 'Kraker', email: 'Margo@test.com'},
    {id: 7, firstName: 'Dalia', lastName: 'Delahoussaye', email: 'Dalia@test.com'},
    {id: 8, firstName: 'Cecila', lastName: 'Martell', email: 'Cecila@test.com'},
    {id: 9, firstName: 'Amee', lastName: 'Koelling', email: 'Amee@test.com'},
    {id: 10, firstName: 'Mckinley', lastName: 'Pepin', email: 'Mckinley@test.com'},
    {id: 11, firstName: 'Jonie', lastName: 'Cromer', email: 'Jonie@kent.com'},
    {id: 12, firstName: 'Yvonne', lastName: 'Fehrenbach', email: 'Yvonne@test.com'}
  ];
}
