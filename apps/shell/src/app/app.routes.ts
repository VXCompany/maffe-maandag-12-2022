import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'klantbeeld',
    loadChildren: () =>
      loadRemoteModule('klantbeeld', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: '',
    redirectTo: '/welkom',
    pathMatch: 'full',
  },
  {
    path: 'welkom',
    loadChildren: () =>
      loadRemoteModule('welkom', './Module').then((m) => m.RemoteEntryModule),
  },
];
