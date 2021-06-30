import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SongEntity } from "../reducers/songs.reducer";

@Injectable()
export class SongsDataService {

  getSongs(): Observable<SongEntity[]> {
    // todo: ask the api for this

    return of([
      { id: '1', title: 'Happy Birthday', artist: 'Unknown', album: 'Annoying Kids Songs' },
      { id: '2', title: 'Carnage', artist: 'Nick Cave and Warren Ellis', album: 'Carnage' }
    ])
  }
}
