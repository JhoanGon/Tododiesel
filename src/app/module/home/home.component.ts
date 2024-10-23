import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imagenes = [
    {
      url: 'img/products/camisas_motor.png',
      name: 'Camisas de Motor',
      description: 'Descubre nuestras camisas de motor, diseñadas con tecnología de vanguardia para garantizar un rendimiento excepcional y durabilidad. Perfectas para mantener tu vehículo en óptimas condiciones y maximizar su potencia.'
    },
    {
      url: 'img/products/casquetes.png',
      name: 'Casquetes',
      description: 'Nuestros casquetes son la solución ideal para proteger los componentes de tu motor. Fabricados con materiales de alta resistencia, ofrecen una defensa efectiva contra el desgaste y el daño, asegurando una larga vida útil a tus piezas.'
    },
    {
      url: 'img/products/empaquetaduras.png',
      name: 'Empaquetaduras',
      description: 'Las empaquetaduras que ofrecemos son esenciales para garantizar un sellado perfecto. Con propiedades de resistencia superior, evitan filtraciones y mantienen la eficiencia de tu motor, asegurando que cada viaje sea seguro y sin contratiempos.'
    }
  ];

}
