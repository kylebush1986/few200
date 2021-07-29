import { createAction, props } from "@ngrx/store";
import { ItemEntity } from "../reducers/library.reducer";

export const loadItems = createAction(
  '[library] load library items'
);

export const loadItemsSucceeded = createAction(
  '[library] loading the items succeeded',
  props<{ payload: ItemEntity[] }>()
);

export const loadItemFailed = createAction(
  '[library] loading the items failed'
)
