import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private BASE_URL = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/${id}`);
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/register`, user);
  }

  login(user: any): Observable<string> {
    return this.http.post(`${this.BASE_URL}/login`, user, { responseType: 'text' }).pipe(
      tap(token => {
        // ✅ SSR-safe storage
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', token);
        }
      })
    );
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }

  getToken(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
