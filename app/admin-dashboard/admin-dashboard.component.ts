import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users = [
    { id: 1, username: 'john_doe', email: 'john.doe@example.com' },
    { id: 2, username: 'jane_doe', email: 'jane.doe@example.com' }
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    console.log(`User with id ${id} deleted`);
  }
}


