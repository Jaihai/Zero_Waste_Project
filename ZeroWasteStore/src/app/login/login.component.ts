import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { PublicNavbarComponent } from '../navbar/Guest/public-navbar.component';
import { UserHomeComponent } from '../../User/UserHome.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule, PublicNavbarComponent,UserHomeComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  onLogin() {
    // ✅ Trim input and check empty
    const emailTrimmed = this.email.trim();
    const passwordTrimmed = this.password.trim();

    if (!emailTrimmed || !passwordTrimmed) {
      this.message = 'Email and Password are required ❌';
      return;
    }

    this.api.login({ email: emailTrimmed, password: passwordTrimmed }).subscribe({
      next: (res: any) => {
        console.log('Login Response:', res);

        if (res && res.user) {
          // ✅ Save user to AuthService
          this.auth.setUser(res.user);

          const role = (res.user.role || '').toLowerCase();

          if (role.includes('admin')) {
            this.router.navigate(['/admin/dashboard']);
          } else {
            this.router.navigate(['/UserHome']);
          }
        } else {
          this.message = res.message || 'Invalid email or password ❌';
        }
      },
      error: (err) => {
        console.error('Login Error:', err);
        this.message = 'Server error. Please try again later.';
      }
    });
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
