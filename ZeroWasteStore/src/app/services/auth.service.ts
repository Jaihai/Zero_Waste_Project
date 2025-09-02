import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private baseUrl = "http://localhost:8080/api/users";
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.userSubject.next(this.getUserFromStorage());
    }
  }

  private getUserFromStorage() {
  if (typeof window !== 'undefined') {   // ✅ Ensures browser environment
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
}

setUser(user: any) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }
}

clearUser() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}

}
