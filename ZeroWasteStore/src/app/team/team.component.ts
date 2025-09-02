import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  team = [
    { name: 'Anupriya', role: 'CEO', img: 'assets/images/anu.jpg' },
    { name: 'Jayanthi', role: 'CEO', img: 'assets/images/jai.jpg' },
    { name: 'Pradeepa', role: 'CEO', img: 'assets/images/pradeepa.jpg' },
    { name: 'Rajarajeshwari', role: 'CEO', img: 'assets/images/raji.jpg' },
    { name: 'Subanu', role: 'CEO', img: 'assets/images/suba.jpg' }
  ];
}
