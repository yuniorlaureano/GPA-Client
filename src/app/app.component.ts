import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnvService } from '../services/common/env/env.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gpa-app';

  constructor(private env: EnvService, private http: HttpClient) {
    console.log(env);
    setTimeout(() => {
      this.http.get<string>('https://jsonplaceholder.typicode.com/posts');
    }, 1000);
  }
}
