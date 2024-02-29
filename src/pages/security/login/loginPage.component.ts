import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthModel } from '../../../models/security/auth.model';
import { AuthService } from '../../../services/security/auth.service';
import { TokenService } from '../../../services/common/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loginPage.component.html',
  styleUrl: './loginPage.component.css',
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private auth: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}
  onSubmit() {
    this.auth.login(this.loginForm.value as AuthModel).then((response) => {
      this.tokenService.saveToken(response.data);
      this.router.navigate(['/']);
    });
  }
}
