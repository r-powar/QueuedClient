/**
 * Created by rpowar on 5/20/17.
 */
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  { path: '', component: RandomComponent}
];

export const routing = RouterModule.forRoot(routes);
