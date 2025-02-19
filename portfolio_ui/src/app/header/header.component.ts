import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  socials = [
    { icon: 'fas fa-envelope', link: '' },
    { icon: 'fab fa-gitlab', link: '' },
    { icon: 'fab fa-github', link: '' },
    { icon: 'fab fa-linkedin', link: '' }
  ];
}
