import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  logThemAll$ = createEffect(() =>
    this.actions$.pipe(
      tap(a => console.log(`Got an action of type ${a.type}`))
    ), { dispatch: false }
  )

  constructor(private actions$: Actions) { }
}
