import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/library.actions'

export interface ItemEntity {
  id: string;
  title: string;
  format: string;
  isCheckedOut: boolean;
}

export interface LibraryState extends EntityState<ItemEntity> { }

export const adapter = createEntityAdapter<ItemEntity>();

const initialState = adapter.getInitialState();

export const reducerFunction = createReducer(
  initialState,
  on(actions.loadItemsSucceeded, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.itemCreated, (s, a) => adapter.addOne({
    id: (s.ids.length + 1).toString(),
    title: a.payload.title,
    format: a.payload.format,
    isCheckedOut: false
  }, s)),
  on(actions.itemAdded, (s, a) => adapter.updateOne({
    id: a.tempId,
    changes: {
      id: a.payload.id
    }
  }, s)),
  on(actions.itemCheckedOut, (s, a) => adapter.updateOne({
    id: a.id,
    changes: {
      isCheckedOut: true
    }
  }, s)),
  on(actions.itemCheckedIn, (s, a) => adapter.updateOne({
    id: a.id,
    changes: {
      isCheckedOut: false
    }
  }, s))
)

export function reducer(state: LibraryState = initialState, action: Action): LibraryState {
  return reducerFunction(state, action);
}
