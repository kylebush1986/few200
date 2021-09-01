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
// const initialState: LibraryState = {
//   ids: ['1', '2'],
//   entities: {
//     { id: '1', title: 'The Matrix', format: 'Movie', isCheckedOut: true },
//     { id: '2', title: 'It', format: 'Book', isCheckedOut: false }
//   }
// }

export const reducerFunction = createReducer(
  initialState,
  on(actions.loadItemsSucceeded, (s, a) => adapter.setAll(a.payload, s))
)

export function reducer(state: LibraryState = initialState, action: Action): LibraryState {
  return reducerFunction(state, action);
}
