import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'left-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, LogoComponent],
  templateUrl: './left-navbar.component.html',
  styleUrl: './left-navbar.component.css',
})
export class LeftNavBarComponent {}
