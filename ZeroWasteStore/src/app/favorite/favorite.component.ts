import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  favoriteProducts = [
    { name: 'Eco Bag', price: 299, description: 'Reusable eco-friendly bag' },
    { name: 'Bamboo Toothbrush', price: 99, description: 'Sustainable toothbrush' }
  ];
}
