import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import {QueuedService} from './queued.service';

import { SearchbarComponent } from './searchbar/searchbar.component';

import { HomeComponent } from './home/home.component';
import { ProviderComponent } from './provider/provider.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HomeComponent,
    ProviderComponent,
    ReservationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/' }, QueuedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
