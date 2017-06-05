import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import {QueuedService} from '../queued.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  route$: Router;
  queued$: QueuedService;
  constructor(
    route: Router,
    queued: QueuedService
  ) {
    this.route$ = route;
    this.queued$ = queued;
  }

  ngOnInit() {
  }

}
