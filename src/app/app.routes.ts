import { Routes } from '@angular/router';
import { LayoutComponent } from './module/layout/layout.component';

export const routes: Routes = [
  {
    path: 'dashboard', component: LayoutComponent,
    children: [
      {
        path: 'home', loadComponent: () => import('./module/home/home.component').then(x => x.HomeComponent)
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
    ]
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];
