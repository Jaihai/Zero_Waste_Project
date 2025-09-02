import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from '../../navbar/Admin/admin-navbar.component';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule,AdminNavbarComponent,RouterModule],  // ❌ remove Router here
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  products: any[] = [];
  editingProduct: any = null;
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  goToAddProduct() {
    this.router.navigate(['/admin/add-product']);  // ✅ update path to match routes
  }

  ngOnInit() {
    this.fetchProducts();
  }

 fetchProducts() {
  this.http.get<any[]>('http://localhost:8080/api/products').subscribe({
    next: (res) => {
      this.products = res.map(p => ({
        ...p,
        imageUrl: p.imageUrl ? `http://localhost:8080${p.imageUrl}` : null
      }));
    },
    error: (err) => console.error('Error fetching products', err)
  });
}


  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.http.delete(`http://localhost:8080/api/products/${id}`).subscribe({
        next: () => {
          this.message = '✅ Product deleted successfully!';
          this.fetchProducts();
        },
        error: (err) => {
          console.error(err);
          this.message = '❌ Failed to delete product!';
        }
      });
    }
  }

  startEdit(product: any) {
    this.editingProduct = { ...product };
  }

  cancelEdit() {
    this.editingProduct = null;
  }

  updateProduct() {
    if (!this.editingProduct) return;

    this.http.put(`http://localhost:8080/api/products/${this.editingProduct.id}`, this.editingProduct).subscribe({
      next: () => {
        this.message = '✅ Product updated successfully!';
        this.editingProduct = null;
        this.fetchProducts();
      },
      error: (err) => {
        console.error(err);
        this.message = '❌ Failed to update product!';
      }
    });
  }
}
