import { createAction, props } from "@ngrx/store";
import { SongEntity } from "../reducers/songs.reducer";

// initiator (command)
export const loadSongs = createAction(
  '[music] load the songs'
);

// success
export const loadSongsSucceeded = createAction(
  '[music] loading the songs succeeded',
  props<{ payload: SongEntity[] }>()
);

// failure
