import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-plain',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './plain.component.html',
  styleUrl: './plain.component.css',
})
export class PlainComponent {}
