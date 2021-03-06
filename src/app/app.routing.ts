/**
 * Created by rpowar on 5/20/17.
 */
import { Routes, RouterModule } from '@angular/router';

import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomeComponent } from './home/home.component';
import { ProviderComponent } from './provider/provider.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'provider' , component: ProviderComponent},
  { path: 'search', component: SearchbarComponent },
  { path: 'reservation' , component: ReservationComponent },
  { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(routes);
