import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoggedInGuard} from 'ngx-auth-firebaseui';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'getting-started',
    loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedModule)
  },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  {
    path: 'i18n',
    loadChildren: () => import('./i18n/i18n.module').then(m => m.I18nModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./legal/legal.module').then(m => m.LegalModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  },

  {
    path: 'exchanges',
    loadChildren: () => import('./exchanges/exchanges.module').then(m => m.ExchangesModule),
  },
  {
    path: 'secured',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule),
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
