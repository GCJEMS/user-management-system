import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  email: string = '';
  token: string = '';
  message: string = '';

  constructor(private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      this.token = params['token'];
    });
  }

  verify() {
    this.authService.verifyEmail(this.email, this.token).subscribe({
      next: (response) => {
        this.message = 'Email verified successfully. You can now log in.';
      },
      error: (err) => {
        this.message = 'Invalid verification token.';
      }
    });
  }
}
