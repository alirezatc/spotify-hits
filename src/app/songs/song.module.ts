import { NgModule } from '@angular/core';
import { SongsListComponent } from './songs-list.component';
import { SongDetailComponent } from './song-detail.component';
// import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SongDetailGuard } from './song-detail.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SongsListComponent,
    SongDetailComponent,
    // ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'songs', component: SongsListComponent },
      { path: 'songs/:id', canActivate: [SongDetailGuard], component: SongDetailComponent },
    ]),
    SharedModule
  ]
})
export class SongModule { }
