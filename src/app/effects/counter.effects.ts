import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, map, tap } from "rxjs/operators";
import { applicationStarted } from "../actions/app.actions";

import * as actions from '../actions/counter.actions';

@Injectable()
export class CounterEffects {

  // applicationStarted => read localStorage => countBySet | null
  getCountBy = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => localStorage.getItem('by')), // ("1" | "3" | "5") | null
      filter((val: any) => typeof (val) === 'string'),
      map(a => parseInt(a, 10)),
      filter(val => val === 1 || val === 3 || val === 5), // validates that the value in storage is a valid option
      map(by => actions.countBySet({ by }))
    ), { dispatch: true }
  )

  // countBySet => (write it to localStorage) => null, nothing
  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  )

  constructor(private actions$: Actions) { }
}
