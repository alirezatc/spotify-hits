import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ISong } from './song';

@Injectable({
    providedIn: 'root'
})
export class SongService {
    private songUrl = 'api/songs/spotify.json'; //this will get replaced by the real service URL

    constructor(private http: HttpClient) { }

    getSongs(): Observable<ISong[]> {
        return this.http.get<ISong[]>(this.songUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    getSong(id: number): Observable<ISong | undefined> {
        return this.getSongs()
            .pipe(
                map((songs: ISong[]) => songs.find(s => s.Id === id))
            );
    }
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
