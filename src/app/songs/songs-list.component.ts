import { Component, OnInit } from '@angular/core';
import { ISong } from './song';
import { SongService } from './song.service';

@Component({
  // selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  pageTitle: string = 'Songs List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  imagePadding: number = 2;
  showImage: boolean = false;
  ratingScore: string = '';
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSongs = this.listFilter ? this.performFilter(this.listFilter) : this.songs;
  }

  filteredSongs: ISong[];
  songs: ISong[] = [];


  constructor(private songService: SongService) {
    // this.listFilter = 'Senorita';
  }
  onRatingClicked(arg: string): void {
    this.ratingScore = arg;
  }
  performFilter(filterBy: string): ISong[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.songs.filter((song: ISong) =>
      song.TrackName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  toggleImage(): void {
    // console.log('to');
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.songService.getSongs().subscribe({
      next: songs => {
        this.songs = songs,
        this.filteredSongs = this.songs;
      },
      error: err => this.errorMessage = err
    })
    

  }


}
