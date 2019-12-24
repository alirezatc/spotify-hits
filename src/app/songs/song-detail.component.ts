import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISong } from './song';
import { SongService } from './song.service';

@Component({
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  pageTitle: string = 'Song Detail';
  errorMessage = '';
  song: ISong | undefined;
  userImgUrl: string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5Log4MooA74arSp4B3DFr2fgVeVcWTu4rgIPtowpGURbyKSX&s';

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private songService: SongService) { }

  ngOnInit() {
    // let id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // this.pageTitle += `: ${id}`;
    // this.song = {
    //   "imageUrl": "",
    //   "Id": 32,
    //   "TrackName": "7 rings",
    //   "Artist Name": "Ariana Grande",
    //   "Genre": "dance pop",
    //   "Beats Per Minute": 140,
    //   "Energy": 32,
    //   "Danceability": 78,
    //   "Loudness (dB)": -11,
    //   "Liveness": 9,
    //   "Valence": 33,
    //   "Length": 179,
    //   "Acousticness": 59,
    //   "Speechiness": 33,
    //   "Popularity": 89
    // };
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getSong(id);
    }
  }
  getSong(id: number) {
    this.songService.getSong(id).subscribe({
      next: song => this.song = song,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/songs']);
  }

}
