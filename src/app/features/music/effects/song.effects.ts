import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import * as actions from '../actions/song.actions';
import { SongsDataService } from "../services/songs-data.service";

@Injectable()
export class SongEffects {

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
