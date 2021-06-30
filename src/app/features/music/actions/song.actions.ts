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

// we need to add a song.

export const songCreated = createAction(
  '[music] song created',
  props<{ payload: NewSongInfo }>()
);

export const tempSongCreated = createAction(
  '[music] temp song created',
  props<{ payload: SongEntity }>()
);

export const songAdded = createAction(
  '[music] song added from api',
  props<{ tempId: string, payload: SongEntity }>()
);

interface NewSongInfo {
  title: string;
  artist: string;
  album: string;
}
