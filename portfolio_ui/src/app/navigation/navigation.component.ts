import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar__mobile') && !target.closest('.navbar__hamburger') && !target.closest('.navbar')) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 992) {
      this.isMenuOpen = false;
    }
  }
}
