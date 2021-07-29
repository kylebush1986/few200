import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LibraryDataService } from "../services/library.service";
import * as actions from '../actions/library.actions';
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class LibraryEffects {
  loadLibrary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadItems),
      mergeMap(() => this.service.getLibrary().pipe(
        map(payload => actions.loadItemsSucceeded({ payload }))
      ))
    )
  )

  constructor(private actions$: Actions, private service: LibraryDataService) { }
}
