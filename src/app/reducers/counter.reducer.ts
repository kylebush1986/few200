import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
}

const myReducer = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, (currentState) => ({ ...currentState, current: currentState.current + currentState.by })),
  on(actions.countDecremented, (currentState) => ({ ...currentState, current: currentState.current - currentState.by })),
  on(actions.countBySet, (currentState, action) => ({ ...currentState, by: action.by }))
)

export function reducer(currentState: CounterState = initialState, action: Action): CounterState {
  return myReducer(currentState, action);
}
