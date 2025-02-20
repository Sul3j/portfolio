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
    { icon: 'fas fa-envelope', link: 'mailto:contact@szymonsulejczak.com' },
    { icon: 'fab fa-github', link: 'https://github.com/Sul3j' },
    { icon: 'fab fa-gitlab', link: 'https://gitlab.com/szymon.sul3jczak' },
    { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/szymon-sulejczak-1984451b7/' }
  ];
}
