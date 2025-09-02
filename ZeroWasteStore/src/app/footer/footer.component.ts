import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  isSubscribed: boolean = false;

  subscribe() {
     this.isSubscribed = true;
    alert("🎉Thank you for subscribing! You'll now receive eco-friendly updates");
  }

  reloadPage(url: string) {
    window.location.href = url; // full page reload
  }

}
