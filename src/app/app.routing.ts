/**
 * Created by rpowar on 5/20/17.
 */
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProviderComponent } from './provider/provider.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'provider' , component: ProviderComponent}
];

export const routing = RouterModule.forRoot(routes);
