import { Component } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  about = 'ABOUT';
  route$: Router;
  constructor(
    route: Router
  ) {
    this.route$ = route;
  }
  onClick() {
    this.route$.navigate(['/login']);
  }
}
