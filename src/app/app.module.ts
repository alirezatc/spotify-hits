import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { WelcomeComponent } from './home/welcome/welcome.component';
import { SongModule } from './songs/song.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SongModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
