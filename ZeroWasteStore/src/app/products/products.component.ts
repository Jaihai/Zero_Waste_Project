import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserNavbarComponent } from '../navbar/User/user-navbar.component';
import { Product } from '../services/product.model';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, UserNavbarComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {}

//   ngOnInit(): void {
//     this.http.get<Product[]>('http://localhost:8080/api/products')
//       .subscribe(data => {
//         // ✅ prepend backend URL
//        this.products = data.map(p => ({
//   ...p,
//   imageUrl: 'http://localhost:8080' + p.imageUrl
// }));
//       });
//   }
// getImageUrl(path: string): string {
//   if (!path) return 'assets/no-image.png';
//   return 'http://localhost:8080' + path; // for local dev
//   // return 'https://test.autmdu.in' + path; // for production
//}

ngOnInit(): void {
  this.http.get<Product[]>('http://localhost:8080/api/products')
    .subscribe(data => {
      this.products = data; // keep original "/uploads/..."
    });
}

getImageUrl(path: string): string {
  if (!path) return 'assets/no-image.png';
  return 'http://localhost:8080' + encodeURI(path); // ✅ handles spaces
}


  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
