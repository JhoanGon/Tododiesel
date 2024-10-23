import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/global/navbar/navbar.component';
import { CarouselComponent } from "../../shared/components/carousel/carousel.component";
import { JumbotronComponent } from '../../shared/components/jumbotron/jumbotron.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CarouselComponent,
    JumbotronComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

  imagenes = [
    'img/marcas/cummins.png',
    'img/marcas/detroit.png',
    'img/marcas/fpDiesel.png',
    'img/marcas/international.png',
    'img/marcas/nissan.png',
    'img/marcas/pai.png',
    'img/marcas/mazda.png',
    'img/marcas/Isuzu.png'
  ];

}
