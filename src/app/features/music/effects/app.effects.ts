// applicationStarted -> LoadSongs

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";

import * as appActions from '../../../actions/app.actions';
import * as songActions from '../actions/song.actions';

@Injectable()
export class AppEffects {

  loadTheSongsOnApplicationStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => songActions.loadSongs())
    )
  )

  constructor(private actions$: Actions) { }
}
