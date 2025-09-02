import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserNavbarComponent } from '../../navbar/User/user-navbar.component';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderResponse {
  id: number;
  status: string;
  estimatedDelivery?: string | Date;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, UserNavbarComponent],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  orderItems: OrderItem[] = [];
  lastOrder?: OrderResponse;

  // Replace with actual logged-in user ID logic
  userId: number = 1;

  constructor(private http: HttpClient) {
    // Load order items from cart/service
    this.orderItems = [
      { name: 'Eco Bottle', price: 250, quantity: 2 },
      { name: 'Reusable Bag', price: 100, quantity: 1 },
    ];
  }

  getTotal(): number {
    return this.orderItems.reduce(
      (sum, item) => sum + (item.price * (item.quantity || 1)),
      0
    );
  }

  placeOrder() {
    // Prepare payload according to backend DTO
    const payload = {
      products: this.orderItems.map(item => ({
        productName: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      totalAmount: this.getTotal()
    };

    // Call backend API with userId as query param
    this.http.post<OrderResponse>(
      `http://localhost:8080/api/orders?userId=${this.userId}`,
      payload,
      { headers: { 'Content-Type': 'application/json' } }
    ).subscribe({
      next: (res) => {
        this.lastOrder = {
          ...res,
          status: 'PENDING',
          estimatedDelivery: new Date(new Date().setDate(new Date().getDate() + 5))
        };
        console.log('Order placed:', this.lastOrder);
      },
      error: (err) => {
        console.error('Order failed', err);
        alert('Order failed! Please try again.');
      }
    });
  }
}
