import {ActionReducerMap} from "@ngrx/store";

import {authReducer, authStateInterface} from "./auth/auth.reducer";

export interface AppState{
  auth: authStateInterface,
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
}
