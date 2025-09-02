import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {

  constructor(private router: Router) {}

  // ✅ Logout function
  logout() {
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  // ✅ Checkout function (fixes your error)
  checkout() {
    console.log('Proceeding to checkout...');
    // If you have a checkout page route, navigate to it:
    this.router.navigate(['/checkout']);
  }
}
