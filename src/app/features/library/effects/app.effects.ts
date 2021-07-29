import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";

import * as appActions from '../../../actions/app.actions';
import * as libraryActions from '../actions/library.actions';

@Injectable()
export class AppEffects {
  loadTheLibraryOnApplicationStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => libraryActions.loadItems())
    )
  )

  constructor(private actions$: Actions) { }
}
