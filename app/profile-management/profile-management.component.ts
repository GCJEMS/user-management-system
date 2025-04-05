import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {
  profile = {
    username: 'john_doe',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateProfile() {
    console.log('Profile updated:', this.profile);
    // Here you would normally call an API to update the profile on the backend
  }
}
