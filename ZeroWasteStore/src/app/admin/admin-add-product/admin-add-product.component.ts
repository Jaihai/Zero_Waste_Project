import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from '../../navbar/Admin/admin-navbar.component';

@Component({
  selector: 'app-admin-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, AdminNavbarComponent],
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent {

  product: {
    name: string;
    price: number | null;
    category: string;
    description: string;
    image: string;
  } = {
    name: '',
    price: null,
    category: '',
    description: '',
    image: ''
  };

  addedProduct: any = null;
  showSuccess = false;
  selectedFile: File | null = null;

  categories: string[] = ['essentials', 'household', 'haircare', 'cleanbeauty', 'bath&body'];

  constructor(private router: Router, private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Only image files are allowed!');
        return;
      }
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.product.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (!this.selectedFile) {
      alert('Please select an image file.');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('price', this.product.price?.toString() || '0');
    formData.append('category', this.product.category);
    formData.append('description', this.product.description);
    formData.append('image', this.selectedFile, this.selectedFile.name);

    this.http.post('http://localhost:8080/api/products/upload', formData)
      .subscribe({
        next: (res: any) => {
          this.addedProduct = res;
          this.showSuccess = true;

          // Reset form
          this.product = {
            name: '',
            price: null,
            category: '',
            description: '',
            image: ''
          };
          this.selectedFile = null;
        },
        error: (err: any) => {
          console.error('Error adding product', err);
          alert('Failed to add product. See console.');
        }
      });
  }

  goToDashboard() {
    this.router.navigate(['admin/dashboard']);
  }

  addNewProduct() {
    this.showSuccess = false;
    this.addedProduct = null;
  }
}
