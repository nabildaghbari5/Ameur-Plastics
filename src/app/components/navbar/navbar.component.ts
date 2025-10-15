import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  isDropdownOpen = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  openDropdown() {
    if (window.innerWidth > 968) {
      this.isDropdownOpen = true;
    }
  }

  closeDropdown() {
    if (window.innerWidth > 968) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown(event: Event) {
    if (window.innerWidth <= 968) {
      event.preventDefault();
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isDropdownOpen = false;
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.isDropdownOpen = false;
  }
}
