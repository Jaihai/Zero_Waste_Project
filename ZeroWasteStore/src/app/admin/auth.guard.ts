import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class authGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): boolean {
    // ✅ Only run localStorage check in browser
    if (isPlatformBrowser(this.platformId)) {
      const userStr = localStorage.getItem('user');
      if (!userStr) {
        this.router.navigate(['/login']);
        return false;
      }

      const user = JSON.parse(userStr);

      // ✅ check role
      if (user.role?.toLowerCase().includes('admin')) {
        return true;
      }

      this.router.navigate(['/home']);
      return false;
    }

    // 🚨 On server (SSR) — deny access
    this.router.navigate(['/login']);
    return false;
  }
}
