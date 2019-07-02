import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers(): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => observer.next(this.users), 200)
    })
  }

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
