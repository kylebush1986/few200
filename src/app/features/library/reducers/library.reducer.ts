import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/library.actions'

export interface ItemEntity {
  _id: string;
  title: string;
  format: string;
  isCheckedOut: boolean;
}

export interface ItemState extends EntityState<ItemEntity> {

}

export const adapter = createEntityAdapter<ItemEntity>({
  selectId: e => e._id
});

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadItemsSucceeded, (state, action) => adapter.setAll(action.payload, state))
)

export function reducer(state: ItemState = initialState, action: Action): ItemState {
  return reducerFunction(state, action);
}
