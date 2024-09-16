import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/ubicaciones',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'ubicaciones',
    loadComponent: () => import('./pages/ubicaciones/ubicaciones.page').then( m => m.UbicacionesPage)
  },
  {
    path: 'estancias',
    loadComponent: () => import('./pages/estancias/estancias.page').then( m => m.EstanciasPage)
  },
];
