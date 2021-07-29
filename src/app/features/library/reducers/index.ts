import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { LibraryItem } from '../models';
import * as fromLibrary from './library.reducer';

export const featureName = 'libraryFeature';

export interface LibraryState {
  items: fromLibrary.ItemState
}

export const reducers: ActionReducerMap<LibraryState> = {
  items: fromLibrary.reducer
}

export const selectFeature = createFeatureSelector<LibraryState>(featureName);

const selectLibraryBranch = createSelector(
  selectFeature,
  f => f.items
)

const { selectAll: selectAllItemArray } = fromLibrary.adapter.getSelectors(selectLibraryBranch);

export const selectLibraryItems = createSelector(
  selectAllItemArray,
  i => i as LibraryItem[]
)
