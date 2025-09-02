import { Component, OnInit } from '@angular/core';
import { ProductService } from '../app/services/product.service';
import { Product } from '../app/services/product.model';
import { StoreService } from '../app/services/store.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserNavbarComponent } from '../app/navbar/User/user-navbar.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, FormsModule, UserNavbarComponent, RouterModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  query: string = '';
  results: Product[] = [];

  constructor(
    private productService: ProductService,
    public store: StoreService
  ) {}

  ngOnInit() {
    // Show all products initially
    this.results = this.productService.getProducts();
  }

  onSearch() {
    this.productService.searchProducts(this.query).subscribe(res => {
      this.results = res;
      console.log('Query:', this.query, 'Results:', res);
    });
  }

  // Add product to cart
  addToCart(product: Product) {
    this.store.addToCart(product); // Your service method should handle quantity updates
    alert(`${product.name} added to cart!`); // Optional feedback
  }

  // Wishlist toggle
  toggleLike(product: Product) {
    this.store.toggleWishlist(product);
  }

  isLiked(id: number): boolean {
    return this.store.isInWishlist(id);
  }
}
