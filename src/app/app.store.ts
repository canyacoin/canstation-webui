import { Store, combineReducers } from "@ngrx/store";

// types
export type Filters = { currency: any };
export type AppState = { filters: Filters };
export type State = { app: AppState };
export type ChangeCurrency = { type: 'CHANGE_CURRENCY', payload: { currency: any } };
type Action = ChangeCurrency;

// state
export const AppState = {
  filters: { currency: {} }
}
export const initialState: State = {
  app: AppState
};

// actions
export const Actions = {
  CHANGE_CURRENCY: 'CHANGE_CURRENCY'
};

// reducer
export function appReducer(state: AppState, action: Action): AppState {
  console.log('state: ', state);
  switch (action.type) {
    case Actions.CHANGE_CURRENCY: {
      const filters = state.filters;
      filters.currency = action.payload.currency;
      return { filters };
    }
    default: {
      return state;
    }
  }
}