import { Action } from "@ngrx/store";

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
}

export function reducer(currentState: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case 'increment': {
      return {
        current: currentState.current + 1
      }
    }
    case 'decrement': {
      return {
        current: currentState.current - 1
      }
    }
    case 'reset': {
      return initialState;
    }
    default: {
      return currentState;
    }
  }
}
