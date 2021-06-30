import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { SongListItem } from "../models";
import * as fromSongs from './songs.reducer';

export const featureName = 'musicFeature';

export interface MusicState {
  songs: fromSongs.SongState
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer
}

// 1. Feature Selector (we are in a feature)
export const selectFeature = createFeatureSelector<MusicState>(featureName);

// 2. Selector per branch
const selectSongsBranch = createSelector(
  selectFeature,
  f => f.songs
)

// 3. (optional) Helpers
const { selectAll: selectAllSongArray } = fromSongs.adapter.getSelectors(selectSongsBranch);

// 4. What the components need
// TODO TodoListItem[] for the list component
export const selectSongListItems = createSelector(
  selectAllSongArray,
  s => s as SongListItem[]
)
