import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonDirective } from './directive/skeleton.directive';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    SkeletonDirective,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
