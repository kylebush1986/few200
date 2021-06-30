import { createAction, props } from "@ngrx/store";

export const countIncremented = createAction('[app counter event] count was incremented');
export const countDecremented = createAction('[app counter event] count was decremented');
export const countReset = createAction('[app counter event] the count was reset');

export const countBySet = createAction(
  '[app counter event] count-by set',
  props<{ by: number }>()
);
