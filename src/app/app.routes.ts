import { Routes } from '@angular/router';

const name = 'Ministerio de Justicia y el derecho'

export const routes: Routes = [
  {
    path: '',
    title: `Inicio | ${name}`,
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
  },
  // {
  //   path: ':site',
  //   title: `Inicio | ${name}`,
  //   loadComponent: () => import('./pages/dynamicsite/dynamicsite.component').then(c => c.DynamicsiteComponent),
  // },
  {
    path: 'nosotros',
    title: `Nosotros | ${name}`,
    loadComponent: () => import('./pages/about-us/about-us.component').then(c => c.AboutUsComponent),
  },
  {
    path: 'participa',
    title: `Participa | ${name}`,
    loadComponent: () => import('./pages/participa/participa.component').then(c => c.ParticipaComponent),
  },
  {
    path: 'legalapp',
    title: `LegalApp | ${name}`,
    loadComponent: () => import('./pages/legalapp/legalapp.component').then(c => c.LegalappComponent),
  },
  {
    path: 'casas-de-justicia',
    title: `Casas de Justicia | ${name}`,
    loadComponent: () => import('./pages/casasdejusticia/casasdejusticia.component').then(c => c.CasasdejusticiaComponent),
  }
];
