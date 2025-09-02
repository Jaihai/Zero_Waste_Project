import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- import this
import { FormsModule } from '@angular/forms';
import { UserNavbarComponent } from '../app/navbar/User/user-navbar.component';

@Component({
  selector: 'app-bathbody',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, UserNavbarComponent], // <-- use RouterModule
  templateUrl: './bathbody.component.html',
  styleUrls: ['./bathbody.component.css']
})
export class BathbodyComponent {
  products = [
    { id: 21, name: 'Bars and Cloths', img: 'assets/images/b1.jpg', price: 999, category: 'bathbody' },
  { id: 22, name: 'Versatile Use', img: 'assets/images/b2.jpg', price: 1199, category: 'bathbody' },
  { id: 23, name: 'Bamboo Product', img: 'assets/images/b3.jpg', price: 1099, category: 'bathbody' },
  { id: 24, name: 'Body Wash & Lotion', img: 'assets/images/b4.jpg', price: 1999, category: 'bathbody' },
  { id: 25, name: 'Makeup removal', img: 'assets/images/b5.jpg', price: 999, category: 'bathbody' }
  ];

  toggleLike(product: any) {
    product.liked = !product.liked;
  }

  addToCart(product: any) {
    alert(`${product.name} added to cart!`);
  }
}
