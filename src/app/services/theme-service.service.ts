import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  private changeTheme = new BehaviorSubject<boolean>(false);
  currentTheme = this.changeTheme.asObservable();

  constructor() { }

  toggleTheme(value: boolean) {
    this.changeTheme.next(value);
  }
}
