import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdminNavbarComponent } from './navbar/Admin/admin-navbar.component';
import { UserNavbarComponent } from './navbar/User/user-navbar.component';
import { PublicNavbarComponent } from './navbar/Guest/public-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AdminNavbarComponent,
    UserNavbarComponent,
    PublicNavbarComponent,
    FooterComponent,
    HomeComponent,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  userRole: 'user' | 'admin' | null = null;  // 👈 store only role

  constructor(private auth: AuthService) {}

  ngOnInit() {
    // Listen for login/logout events from AuthService
    this.auth.user$.subscribe((user: any) => {
      if (user) {
        this.isLoggedIn = true;
        this.userRole = user.role?.toLowerCase() as 'user' | 'admin';
      } else {
        this.isLoggedIn = false;
        this.userRole = null;
      }
    });
  }

  isAdmin(): boolean {
    return this.isLoggedIn && this.userRole === 'admin';
  }

  isUser(): boolean {
    return this.isLoggedIn && this.userRole === 'user';
  }

  isGuest(): boolean {
    return !this.isLoggedIn;
  }
}
