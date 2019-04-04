import {Routes} from '@angular/router';

import {HomeComponent} from './Component/home/home.component';
import {OAuthComponent} from '~/app/Component/oauth/oauth.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'oauth', component: OAuthComponent},
];
