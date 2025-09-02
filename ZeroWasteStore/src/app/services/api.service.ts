import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/api'; // backend URL

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  // ✅ Fetch all products
  getProducts(): Observable<any> {
    return this.http.get(`${BASE_URL}/products`);
  }

  // ✅ Add product with image upload
  addProductWithImage(formData: FormData): Observable<any> {
    return this.http.post(`${BASE_URL}/products/upload`, formData);
  }

  // ✅ Update product
  updateProduct(product: any): Observable<any> {
    return this.http.put(`${BASE_URL}/products/${product.id}`, product);
  }

  // ✅ Delete product
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/products/${id}`);
  }

  // ✅ Signup
  signup(user: any): Observable<any> {
    return this.http.post(`${BASE_URL}/users/register`, user);
  }

  // ✅ Login
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${BASE_URL}/users/login`, credentials);
  }
}
