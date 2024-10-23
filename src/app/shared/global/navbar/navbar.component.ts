import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-[#121823]', 'shadow-md', 'dark:bg-gray-900');
      } else {
        navbar.classList.remove('bg-[#121823]', 'shadow-md', 'dark:bg-gray-900');
        navbar.classList.add('bg-transparent');
      }
    }
  }
}
