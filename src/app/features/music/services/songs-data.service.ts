import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { SongEntity } from "../reducers/songs.reducer";

@Injectable()
export class SongsDataService {

  getSongs(): Observable<SongEntity[]> {
    // todo: ask the api for this

    return this.client.get<{ data: SongEntity[] }>('http://localhost:3000/songs').pipe(
      map(response => response.data)
    )
  }

  addSong(song: SongEntity): Observable<SongEntity> {
    const songToSend = {
      title: song.title,
      artist: song.artist,
      album: song.album
    }
    return this.client.post<SongEntity>('http://localhost:3000/songs', songToSend);
  }

  constructor(private client: HttpClient) { }

}
