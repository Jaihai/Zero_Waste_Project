import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserNavbarComponent } from '../app/navbar/User/user-navbar.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, UserNavbarComponent],
  templateUrl: './UserHome.component.html'
})
export class UserHomeComponent {
  // Property for the search input
  searchQuery: string = '';

  constructor(private router: Router) {}

  // Method called when search form is submitted
  search() {
    console.log('Searching for:', this.searchQuery);
    // Example: navigate to products page with query parameter
    this.router.navigate(['/products'], { queryParams: { q: this.searchQuery } });
  }
}
