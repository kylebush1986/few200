import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/song.actions';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album: string;
}

export interface SongState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadSongsSucceeded, (state, action) => adapter.setAll(action.payload, state))
);

export function reducer(state: SongState = initialState, action: Action): SongState {
  return reducerFunction(state, action);
}



