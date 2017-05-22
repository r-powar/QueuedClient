import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import {QueuedService} from './queued.service';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent
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
