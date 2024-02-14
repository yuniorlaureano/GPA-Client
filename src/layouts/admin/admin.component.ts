import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavBarComponent } from '../top-navbar/topNavBar.component';
import { LeftNavBarComponent } from '../left-navar/left-navbar.component';
import { GpaFooterComponent } from '../gpa-footer/gpa-footer.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    TopNavBarComponent,
    LeftNavBarComponent,
    GpaFooterComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {}
