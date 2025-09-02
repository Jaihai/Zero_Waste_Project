import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { AdminNavbarComponent } from '../../navbar/Admin/admin-navbar.component';
@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AdminNavbarComponent],
  templateUrl: './manage.component.html'
})
export class ManageComponent implements OnInit {
  orders: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
  this.http.get<any[]>('http://localhost:8080/api/orders').subscribe({
    next: data => {
      this.orders = data.map(o => ({
        ...o,
        orderDate: o.orderDate ? new Date(o.orderDate) : null,
        estimatedDeliveryDate: o.estimatedDelivery ? new Date(o.estimatedDelivery) : null
      }));
    },
    error: err => console.error('Failed to load orders', err)
  });
}

sendProduct(order: any) {
  if (!order.estimatedDeliveryDate) {
    alert('Please select a delivery date.');
    return;
  }

  this.http.put(`http://localhost:8080/api/orders/${order.id}/set-delivery`, {
    estimatedDate: order.estimatedDeliveryDate.toISOString().split('T')[0] // send as yyyy-MM-dd
  }).subscribe({
    next: () => {
      alert('Delivery date updated successfully!');
      this.loadOrders();
    },
    error: (err) => {
      console.error(err);
      alert('Failed to update delivery date.');
    }
  });
}

}
