/**
 * Created by rpowar on 5/20/17.
 */
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

const routes: Routes = [
  { path: '', component: RandomComponent },
  { path: 'search', component: SearchbarComponent }
];

export const routing = RouterModule.forRoot(routes);
