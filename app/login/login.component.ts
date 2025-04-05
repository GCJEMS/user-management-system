import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.message = 'Login successful!';
      },
      error: (err) => {
        this.message = 'Invalid credentials or email not verified.';
      }
    });
  }
}
