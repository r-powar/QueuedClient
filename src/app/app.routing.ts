/**
 * Created by rpowar on 5/20/17.
 */
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(routes);
