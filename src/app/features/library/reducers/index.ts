import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store"
import { MusicState } from "../../music/reducers"
import { LibraryListItem } from "../models"
import * as fromItems from "./items.reducer"

export const featureName = 'libraryFeature'

export interface LibraryState {
  items: fromItems.LibraryState
}

export const reducers: ActionReducerMap<LibraryState> = {
  items: fromItems.reducer
}

const selectFeature = createFeatureSelector<LibraryState>(featureName)

const selectLibraryBranch = createSelector(
  selectFeature,
  f => f.items
);

const { selectAll: selectAllItemsArray } = fromItems.adapter.getSelectors(selectLibraryBranch)

export const selectAllItems = createSelector(
  selectAllItemsArray,
  s => s as LibraryListItem[]
)

export const selectCheckedOut = createSelector(
  selectAllItems,
  s => s.filter(i => i.isCheckedOut == true) as LibraryListItem[]
)

export const selectCheckedIn = createSelector(
  selectAllItems,
  s => s.filter(i => i.isCheckedOut == false) as LibraryListItem[]
)
