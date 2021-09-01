import { createAction, props } from "@ngrx/store";
import { LibraryListItem } from "../models";
import { ItemEntity } from "../reducers/items.reducer";

export const loadItems = createAction(
  '[library] load items'
);

export const loadItemsSucceeded = createAction(
  '[library] loading the items succeeded',
  props<{ payload: ItemEntity[] }>()
);

// export const addItem = createAction(
//   '[library] add library item',
//   props<{ item: LibraryListItem }>()
// );

// export const removeItem = createAction(
//   '[library] remove library item',
//   props<{ itemId: string }>()
// );


