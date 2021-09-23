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

export const itemCreated = createAction(
  '[library] item created',
  props<{ payload: NewItemInfo }>()
);

export const itemAdded = createAction(
  '[library] item added',
  props<{ tempId: string, payload: ItemEntity }>()
)

export const itemCheckedOut = createAction(
  '[library] item checked out',
  props<{ id: string }>()
)

export const itemCheckedIn = createAction(
  '[library] item checked in',
  props<{ id: string }>()
)

interface NewItemInfo {
  title: string;
  format: string;
}
