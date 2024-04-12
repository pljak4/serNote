import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/post-list/post-list.component').then(
        (m) => m.ListComponent
      ),
  },
  {
    path: 'info/:id',
    loadComponent: () =>
      import('./pages/info/info.component').then((m) => m.InfoComponent),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: '404' },
];
