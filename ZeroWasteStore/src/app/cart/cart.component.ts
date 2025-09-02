import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Product } from '../services/product.model';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { UserNavbarComponent } from '../navbar/User/user-navbar.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, UserNavbarComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  
  cartProducts: Product[] = [];
  loading: boolean = true;

  constructor(private cartService: CartService, private router: Router) {}

buyNow() {
  this.router.navigate(['/checkout']);
}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((data: Product[]) => {
      this.cartProducts = data;
      this.loading = false;
    });
  }

  removeProduct(id: number) {
    this.cartService.removeFromCart(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
