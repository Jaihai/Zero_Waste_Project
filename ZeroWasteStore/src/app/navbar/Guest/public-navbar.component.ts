import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-public-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.css']
})
export class PublicNavbarComponent {
  searchQuery: string = '';
  loggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkLogin();
  }

  /** Check login safely */
  checkLogin() {
    if (typeof window !== 'undefined') {
      this.loggedIn = !!localStorage.getItem('user');
    }
  }

  /** Search handler */
  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }
}

