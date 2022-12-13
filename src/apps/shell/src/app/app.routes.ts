import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/welkom', 
    pathMatch: 'full'
  },
  {
    path: 'welkom',
    loadChildren: () =>
      loadRemoteModule('welkom', './Module').then((m) => m.RemoteEntryModule),
  },
];
