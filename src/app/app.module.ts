import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SongsListComponent } from './songs/songs-list.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { SongDetailComponent } from './songs/song-detail.component';
import {RouterModule} from '@angular/router';
import { SongDetailGuard } from './songs/song-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    WelcomeComponent,
    ConvertToSpacesPipe,
    StarComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'songs', component: SongsListComponent},
      {path: 'songs/:id',canActivate: [SongDetailGuard] , component: SongDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
