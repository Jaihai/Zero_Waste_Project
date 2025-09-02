import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicNavbarComponent } from '../navbar/Guest/public-navbar.component';
import { AdminNavbarComponent } from '../navbar/Admin/admin-navbar.component';
import { UserNavbarComponent } from '../navbar/User/user-navbar.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterOutlet,
    PublicNavbarComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private api = inject(ApiService);

  products: any[] = [];
  loading = true;
  error: string | null = null;

  user: any = null;  // store logged-in user info

  ngOnInit(): void {
    // Load user from localStorage (if any)
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      this.user = storedUser ? JSON.parse(storedUser) : null;
    }

    // Fetch product data
    this.api.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products';
        this.loading = false;
        console.error(err);
      }
    });
  }

  
  // Helper methods for navbar visibility
  isAdmin(): boolean {
    return this.user?.role?.toLowerCase() === 'admin';
  }

  isUser(): boolean {
    return this.user?.role?.toLowerCase() === 'user';
  }

  isGuest(): boolean {
    return !this.user;
  }
  
}
