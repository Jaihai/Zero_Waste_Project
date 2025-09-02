import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PublicNavbarComponent } from '../navbar/Guest/public-navbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, PublicNavbarComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  role: string = 'user';
  success: boolean = false;
  errorMessage: string = '';

  private api = inject(ApiService);
  private router = inject(Router);

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const username = (this.firstName + this.lastName).replace(/\s+/g, '');
    const payload = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      password: this.password,
      username: username,
      role: this.role === 'admin' ? 'ROLE_ADMIN' : 'ROLE_USER'
    };

    console.log('Payload to backend:', payload);

    this.api.signup(payload).subscribe({
      next: (res: any) => {
        console.log('Registration successful', res);
        this.success = true;
        this.errorMessage = '';

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err: any) => {
        console.error('Registration failed', err);
        this.errorMessage = err?.error?.message || 'Registration failed! Please try again.';
      }
    });
  }
}
