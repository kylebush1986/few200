import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import * as actions from '../actions/song.actions';
import { SongEntity } from "../reducers/songs.reducer";
import { SongsDataService } from "../services/songs-data.service";

@Injectable()
export class SongEffects {

  // tempSongCreated => (api) => songAdded
  sendSongToServer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.tempSongCreated),
      mergeMap(originalAction => this.service.addSong(originalAction.payload)
        .pipe(
          map(payload => actions.songAdded({ tempId: originalAction.payload._id, payload }))
        ))
    )
  )

  private tempId = 1;
  // songCreated => tempSongCreated
  createTempSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.songCreated),
      map(action => ({ _id: 'TEMP' + this.tempId++, ...action.payload } as SongEntity)),
      map(payload => actions.tempSongCreated({ payload }))
    )
  )

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSongs),
      mergeMap(() => this.service.getSongs().pipe(
        map(payload => actions.loadSongsSucceeded({ payload }))
      ))
    )
  )

  constructor(private actions$: Actions, private service: SongsDataService) { }
}
