import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  changeTheme: boolean;

  @Output() closeSidenav = new EventEmitter<void>();

  @ViewChild("icon",  {static: true}) iconRef;
  @ViewChild("label",  {static: true}) labelRef;
  
  constructor(private themeService: ThemeServiceService) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    // textContent
    console.log(this.iconRef._elementRef.nativeElement.textContent)
    console.log(this.labelRef.nativeElement.textContent)
  }

  onClose() {
    this.closeSidenav.emit();
  }

  toggleTheme() {
    this.changeTheme = !this.changeTheme
    this.themeService.toggleTheme(this.changeTheme)
    console.log(this.changeTheme)
    if (this.changeTheme === true) {
      this.iconRef._elementRef.nativeElement.textContent = 'wb_sunny'
      this.labelRef.nativeElement.textContent = 'Light Mode'
    } else {
      this.iconRef._elementRef.nativeElement.textContent = 'brightness_4'
      this.labelRef.nativeElement.textContent = 'Dark Mode'
    }
  }
}
