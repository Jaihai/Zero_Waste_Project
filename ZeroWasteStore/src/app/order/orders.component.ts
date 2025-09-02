import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserNavbarComponent } from '../navbar/User/user-navbar.component';

interface OrderResponse {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  status: string;
  orderDate?: string | Date;
  estimatedDelivery?: string | Date;
}

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, UserNavbarComponent],
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  orders: OrderResponse[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
this.http.get<OrderResponse[]>('http://localhost:8080/api/orders')
      .subscribe({
        next: (res) => {
          this.orders = res.map(order => ({
            ...order,
            orderDate: order.orderDate ? new Date(order.orderDate) : undefined,
            estimatedDelivery: order.estimatedDelivery ? new Date(order.estimatedDelivery) : undefined
          }));
        },
        error: (err) => console.error('Failed to load orders', err)
      });
  }

  getTotal(order: OrderResponse): number {
    return (order.price || 0) * (order.quantity || 1);
  }
}
