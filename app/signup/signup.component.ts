import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  signup() {
    this.authService.signup(this.email, this.password).subscribe({
      next: (response) => {
        this.message = 'Please check your email to verify your account.';
      },
      error: (err) => {
        this.message = 'Error during sign-up. Please try again.';
      }
    });
  }
}
